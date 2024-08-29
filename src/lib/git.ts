import gitlog from 'gitlog';
import { authorNames } from './author-names';
import path from 'node:path';
import { convert } from 'convert-gitmoji';

type AuthorFrontMatter = {
  title?: string;
  description?: string;
  sidebar_custom_props?: {
    emoji?: string;
  };
  additional_authors?: string;
  override_authors?: string;
};

/**
 *
 * @param path - Path to get commits for
 * @param follow - Whether to add the follow parameter. Can only be used for single files.
 * @param limit - The number of commits to return
 */
async function getWikiCommits(
  path: string,
  follow?: boolean,
  limit: number = 100,
) {
  // I tried to also add a start line check here (to exclude some frontmatter, however you can't use both this
  // with follow: true. - Josh
  const commits = await gitlog({
    repo: __dirname,
    fields: ['authorName', 'subject', 'hash', 'authorDate'],
    number: limit,
    file: path,
    follow: follow,
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
  return filteredCommits;
}

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

  const commits = await getWikiCommits(path);

  for (const commit of commits) {
    const authorName = authorNames[commit.authorName] || commit.authorName;
    if (!authors.includes(authorName)) {
      authors.push(authorName);
    }
  }

  return authors;
}

export type WikiChange = {
  hash: string;
  author: string;
  description: string;
  date: string;
  files: string[];
};

/**
 * Format a Git commit message into having a proper emoji and starting with a capital letter
 * @param subject
 */
function formatCommitSubject(subject: string) {
  // Convert Gitmoji and trim
  const emojiSubject = convert(subject, true).trim();

  // Make first character uppercase
  const firstCharacter = emojiSubject.match(/[A-Za-z]/);
  if (!firstCharacter) return emojiSubject;

  // This will only replace the first occurrence of the character
  return emojiSubject.replace(
    firstCharacter[0],
    firstCharacter[0].toUpperCase(),
  );
}

export async function getWikiChangelog(): Promise<WikiChange[]> {
  const commits = await getWikiCommits(
    path.join(__dirname, '../../wiki/'),
    false,
    250,
  );

  return commits.map((commit) => ({
    hash: commit.hash,
    description: formatCommitSubject(commit.subject),
    author: authorNames[commit.authorName] || commit.authorName,
    date: commit.authorDate,
    files: commit.files,
  }));
}
