import gitlog from 'gitlog';
import { authorNames } from './author-names';

type AuthorFrontMatter = {
  title?: string;
  description?: string;
  sidebar_custom_props?: {
    emoji?: string;
  };
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

  // I tried to also add a start line check here (to exclude some frontmatter, however you can't use both this
  // with follow: true. - Josh
  const commits = await gitlog({
    repo: __dirname,
    fields: ['authorName'],
    // fields: ['authorName', 'subject'], // Debug
    number: 100,
    file: path,
    follow: true,
  });

  // Filter commits. See https://git-scm.com/docs/git-status#_output for codes
  // We only want to include commits that include the file being:
  // A: added
  // M: modified
  // R: renamed, but only if the file was also modified in the process (i.e. has a similarity score of less than R100)
  // C: copied, with the same condition as above
  const filteredCommits = commits.filter((commit) =>
    commit.status.some((status) => {
      if (status === 'A') return true;
      else if (status === 'M') return true;
      else if (status.startsWith('R') && status !== 'R100') return true;
      else if (status.startsWith('C') && status !== 'C100') return true;
    }),
  );

  // console.log(filteredCommits); // Debug

  for (const commit of filteredCommits) {
    const authorName = authorNames[commit.authorName] || commit.authorName;
    if (!authors.includes(authorName)) {
      authors.push(authorName);
    }
  }

  return authors;
}
