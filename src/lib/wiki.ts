export function getWikiUrlFromFileName(fileName: string): string | null {
  // Get extension
  const extension = fileName.split('.').reverse()[0];
  const lowercaseExtension = extension.toLowerCase();
  if (
    lowercaseExtension !== 'md' &&
    lowercaseExtension !== 'mdx' &&
    lowercaseExtension !== 'tsx'
  )
    return null;

  // Remove numbers from name
  let url = fileName.replace(/\/[0-9]+-/g, '/');

  // Remove extension
  url = url.replace(`.${extension}`, '');

  // Replace README with /index
  url = url.replace('/README', '/');

  url = url.replace('/index', '/');

  return url;
}
