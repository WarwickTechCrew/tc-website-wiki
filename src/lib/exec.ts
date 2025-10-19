import { readFile, readdir } from 'fs/promises';
import path from 'node:path';
import YAML from 'yaml';

const execDirectory = 'exec';

export type ExecMember = {
  name: string;
  roles: string[];
  image?: string;
};

export type YearExec = {
  year: string;
  exec: ExecMember[];
  hiresAssistants?: HiresAssistantTerm[];
};

export type HiresAssistantTerm = {
  term: string;
  assistants: HiresAssistant[];
};

export type HiresAssistant = {
  name: string;
};

function parseExecMember(data: any): ExecMember {
  return {
    name: data.name.trim(),
    roles: data.roles.map((role: string) => role.trim()),
    image: data.image?.trim(),
  };
}

function parseHiresAssistant(data: any): HiresAssistant {
  return {
    name: data.name.trim(),
  };
}

function parseHiresAssistantTerm(data: any): HiresAssistantTerm {
  return {
    term: data.term.trim(),
    assistants: data.assistants?.map(parseHiresAssistant) || [],
  };
}

async function loadExecYear(directory: string, fileName: string): Promise<YearExec> {
  const file = await readFile(path.join(directory, fileName), 'utf8');
  const data = YAML.parse(file);

  if (!data.year) throw new Error(`Exec year ${fileName} does not have a year`);

  return {
    year: data.year,
    exec: data.exec.map(parseExecMember),
    hiresAssistants: data.hires_assistants?.map(parseHiresAssistantTerm),
  };
}

export async function loadExecYears(): Promise<YearExec[]> {
  const files = await readdir(execDirectory);

  // Filter for YAML files only
  const execFiles = files.filter((file) => file.endsWith('yaml'));

  const execYearData = await Promise.all(execFiles.map((execFile) => loadExecYear(execDirectory, execFile)));

  return execYearData.sort((a, b) => b.year.localeCompare(a.year));
}
