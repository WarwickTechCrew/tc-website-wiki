export function getWikiUrlOrIdFromFileName(fileName: string, getId = false): string | null {
  // Get extension
  const extension = fileName.split('.').reverse()[0];
  const lowercaseExtension = extension.toLowerCase();
  if (lowercaseExtension !== 'md' && lowercaseExtension !== 'mdx' && lowercaseExtension !== 'tsx') return null;

  // Remove extension
  let url = fileName.replace(`.${extension}`, '');

  // Check for links like 06-finance/06-finance
  if (!getId) {
    const splitUrl = url.split('/');
    if (splitUrl.length > 1) {
      splitUrl.reverse();
      if (splitUrl[0] === splitUrl[1]) {
        splitUrl.splice(0, 1);
        splitUrl.reverse();
        url = splitUrl.join('/');
      }
    }
  }

  // Remove numbers from name
  url = url.replace(/\/[0-9]+-/g, '/');

  if (!getId) {
    // Replace README with /index
    url = url.replace('/README', '/');

    url = url.replace('/index', '/');
  }

  if (getId) {
    // Remove trailing url
    if (url.endsWith('/')) url = url.slice(0, -1);

    // Strip wiki/ from start.
    url = url.slice(5);
  }

  return url;
}
