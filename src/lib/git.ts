import gitlog from 'gitlog';
import { authorNames } from './author-names';

type AuthorFrontMatter = {
  additional_authors?: string;
  override_authors?: string;
};

export async function getGitContributors(
  path: string,
  frontMatter: AuthorFrontMatter,
): Promise<string[]> {
  if (frontMatter.override_authors) {
    return frontMatter.override_authors
      .split(',')
      .map((author) => author.trim());
  }

  const authors = frontMatter.additional_authors
    ? frontMatter.additional_authors.split(',').map((author) => author.trim())
    : [];

  const commits = await gitlog({
    repo: __dirname,
    file: path,
    fields: ['authorName'],
    number: 100,
    follow: true,
  });

  for (const commit of commits) {
    if (!authors.includes(commit.authorName)) {
      authors.push(commit.authorName);
    }
  }

  return authors.map((name) => authorNames[name] || name);
}
