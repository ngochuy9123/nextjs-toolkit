import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react"; // Khai báo Import Icon

export interface ToolItemProps {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: ReactNode;
  tags?: string[];
  theme?: { bg: string; text: string };
}

export interface ToolCategoryProps {
  id: string;
  categoryName: string;
  categoryIcon: ReactNode;
  theme?: { bg: string; text: string };
  items: ToolItemProps[];
}

export interface FeatureDirectoryLayoutProps {
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroDescription: string;
  categories: ToolCategoryProps[];
}

export const FeatureDirectoryLayout = ({
  heroTitlePrefix,
  heroTitleHighlight,
  heroDescription,
  categories,
}: FeatureDirectoryLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)] -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6">
            {heroTitlePrefix} <br className="hidden md:block" />
            <span className="text-blue-600">{heroTitleHighlight}</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24 space-y-20">
        {categories.map((category) => {
          const catColorRoot =
            category.theme?.bg?.replace("bg-", "").replace("-50", "") || "blue";
          const catThemeClass = `theme-${catColorRoot}`;

          return (
            <div key={category.id} className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`${catThemeClass} w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-(--t-bg) text-(--t-text)`}
                >
                  {category.categoryIcon}
                </div>
                <h2 className="text-2xl font-bold text-zinc-900">
                  {category.categoryName}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => {
                  const colorRoot =
                    item.theme?.bg?.replace("bg-", "").replace("-50", "") ||
                    "blue";
                  const themeClass = `theme-${colorRoot}`;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      // Bắt buộc thêm class 'relative' và 'hover:-translate-y-1'
                      className={`${themeClass} relative group flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-(--t-border) hover:-translate-y-1 transition-all duration-300 justify-between min-h-55`}
                    >
                      <div className="absolute top-6 right-6 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-(--t-text)">
                        <ArrowUpRight size={20} strokeWidth={2.5} />
                      </div>

                      <div>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 bg-(--t-bg) text-(--t-text) border border-transparent group-hover:bg-(--t-hover) group-hover:border-(--t-border) group-hover:scale-110">
                          {item.icon}
                        </div>

                        <h3 className="text-lg font-bold text-zinc-900 mb-2 transition-colors group-hover:text-[--t-text]">
                          {item.label}
                        </h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-100">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 text-[0.68rem] font-bold rounded-md uppercase tracking-wider select-none bg-(--t-bg) text-(--t-text) border border-transparent group-hover:border-(--t-border) transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
