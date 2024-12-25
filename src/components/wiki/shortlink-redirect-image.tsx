import { useDocById, useDocsVersion } from '@docusaurus/plugin-content-docs/client';

export default function ShortlinkRedirectImage({ docId }: { docId: string }) {
  const test = useDocsVersion();
  console.log(test);
  const doc = useDocById(docId);
  console.log(doc);
  return null;
}
