import DocCardList from '@theme/DocCardList';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';

export default function IntroContents() {
  const sidebar = useDocsSidebar();
  const items = sidebar.items.filter(
    (item) => item.type === 'category' && item.href,
  );

  return <DocCardList items={items} />;
}
