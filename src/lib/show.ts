import { readdir, readFile } from 'fs/promises';
import path from 'node:path';
import YAML from 'yaml';
const showDirectory = 'shows';
const hireDirectory = 'hires';

export type ShowYearData = {
  year: string;
  terms: ShowTermData[];
};

export type ShowTermData = {
  name: string;
  notes?: string;
  shows: ShowData[];
};

export type ShowData = {
  name: string;
  society?: string;
  venue?: string;
  people: {
    role: string;
    name: string;
  }[];
  links: {
    name: string;
    label: string;
    url: string;
  }[];
};

function parseShow(data: any): ShowData {
  if (!data.name) throw new Error('Show does not have a name');

  return {
    name: data.name.trim(),
    society: data.society?.trim(),
    venue: data.venue?.trim(),
    people:
      data.people?.map((person: any) => {
        if (!person.name) throw new Error('Person does not have a name');
        if (!person.role) throw new Error('Person does not have a role');

        return {
          name: person.name.trim(),
          role: person.role.trim(),
        };
      }) || [],
    links:
      data.links?.map((link: any) => {
        if (!link.name) throw new Error('Link does not have a name');
        if (!link.label) throw new Error('Link does not have a label');
        if (!link.url) throw new Error('Link does not have a URL');

        return {
          name: link.name.trim(),
          label: link.label.trim(),
          url: link.url.trim(),
        };
      }) || [],
  };
}

function parseTerm(data: any): ShowTermData {
  if (!data.name) throw new Error('Term does not have a name');

  return {
    name: data.name.trim(),
    notes: data.notes?.trim(),
    shows: data.shows?.map((show: any) => parseShow(show)) || [],
  };
}

async function loadYear(directory: string, fileName: string): Promise<ShowYearData> {
  const file = await readFile(path.join(directory, fileName), 'utf8');
  const data = YAML.parse(file);

  if (!data.year) throw new Error(`Year ${fileName} does not have a year`);

  return {
    year: data.year,
    terms: data.terms?.map((term: any) => parseTerm(term)) || [],
  };
}

async function loadYears(directory: string): Promise<ShowYearData[]> {
  const yearFiles = await readdir(directory);

  const showYearData = await Promise.all(yearFiles.map((fileName) => loadYear(directory, fileName)));

  return showYearData.sort((a, b) => b.year.localeCompare(a.year));
}

export async function loadShowYears(): Promise<ShowYearData[]> {
  return loadYears(showDirectory);
}

export async function loadHireYears(): Promise<ShowYearData[]> {
  return loadYears(hireDirectory);
}
