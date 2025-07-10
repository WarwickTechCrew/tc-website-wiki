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
};

function parseExecMember(data: any): ExecMember {
  return {
    name: data.name.trim(),
    roles: data.roles.map((role: string) => role.trim()),
    image: data.image?.trim(),
  };
}

async function loadExecYear(directory: string, fileName: string): Promise<YearExec> {
  const file = await readFile(path.join(directory, fileName), 'utf8');
  const data = YAML.parse(file);

  if (!data.year) throw new Error(`Exec year ${fileName} does not have a year`);

  return {
    year: data.year,
    exec: data.exec.map(parseExecMember),
  };
}

export async function loadExecYears(): Promise<YearExec[]> {
  const files = await readdir(execDirectory);

  // Filter for YAML files only
  const execFiles = files.filter((file) => file.endsWith('yaml'));

  const execYearData = await Promise.all(execFiles.map((execFile) => loadExecYear(execDirectory, execFile)));

  return execYearData.sort((a, b) => b.year.localeCompare(a.year));
}
