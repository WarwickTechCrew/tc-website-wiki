import DocCardList from '@theme/DocCardList';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';

export default function IntroContents() {
  const sidebar = useDocsSidebar();
  const items = sidebar.items.filter((item) => item.type === 'category');

  return <DocCardList items={items} />;
}
