import { FeatureDirectoryLayout } from "@/shared/components/layout/FeatureDirectoryLayout/FeatureDirectoryLayout";
import { MASTER_SITE_DATA } from "@/shared/constants/site-registry.data";

export default function ToolsPage() {
  const devSandboxNode = MASTER_SITE_DATA.find(
    (item) => item.id === "language-hub",
  );

  const adaptedCategories =
    devSandboxNode?.children?.map((child) => {
      const hasSubChildren = child.children && child.children.length > 0;

      return {
        id: child.id,
        categoryName: child.label,
        categoryIcon: child.icon,
        theme: child.theme,
        items: hasSubChildren
          ? child.children!.map((sub) => ({
              id: sub.id,
              label: sub.label,
              description: sub.description || "",
              href: sub.href || "#",
              icon: sub.icon,
              tags: sub.tags || [],
              theme: sub.theme,
            }))
          : [
              {
                id: child.id,
                label: child.label,
                description: child.description || "",
                href: child.href || "#",
                icon: child.icon,
                tags: child.tags || [],
                theme: child.theme,
              },
            ],
      };
    }) || [];

  return (
    <FeatureDirectoryLayout
      heroTitlePrefix="Complete Suite of"
      heroTitleHighlight="Developer Utilities"
      heroDescription="A comprehensive collection of free, privacy-focused tools for your everyday development needs."
      categories={adaptedCategories}
    />
  );
}
