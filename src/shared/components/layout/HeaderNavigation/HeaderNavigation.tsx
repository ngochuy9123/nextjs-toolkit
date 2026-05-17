"use client";

import Link from "next/link";
import { HEADER_NAV_DATA, NavItemType } from "./navigation.config";
import { useState, useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { ArrowLeft, ArrowRight, ChevronRight, LayoutGrid } from "lucide-react";

const DesktopNavNode = ({ item }: { item: NavItemType }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [activeSubId, setActiveSubId] = useState<string | null>(null);
  const containerRef = useRef<HTMLLIElement>(null);

  useClickOutside(containerRef, () => {
    setIsLocked(false);
    setIsHovered(false);
    setActiveSubId(null);
  });

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isLocked) {
      setActiveSubId(null);
    }
  };

  const hasChildren = item.children && item.children.length > 0;
  const isVisible = isHovered || isLocked;

  if (!hasChildren) {
    return (
      <li className="list-none">
        <Link
          href={item.href || "#"}
          className="block px-4 py-2 text-zinc-900 font-medium hover:text-primary hover:bg-gray-100 transition-colors whitespace-nowrap rounded-md"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={containerRef}
      className="relative list-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors select-none ${
          isVisible
            ? "bg-gray-100 text-primary"
            : "text-zinc-900 hover:bg-gray-100 hover:text-primary"
        }`}
        onClick={() => setIsLocked(!isLocked)}
      >
        <span className="font-medium whitespace-nowrap">{item.label}</span>
        <span
          className={`ml-1 transition-transform duration-200 ${isVisible ? "rotate-180" : ""}`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>

      {isVisible && (
        <div className="absolute top-full left-0 pt-2 z-50 cursor-default">
          <div className="bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden transition-all duration-300 origin-top-left">
            {activeSubId ? (
              <div className="p-5 w-[480px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSubId(null);
                  }}
                  className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-bold text-[0.85rem] mb-4 transition-colors"
                >
                  <ArrowLeft size={16} strokeWidth={2.5} /> Back to {item.label}
                </button>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {item
                    .children!.find((c) => c.id === activeSubId)
                    ?.children?.map((subChild) => (
                      <Link
                        key={subChild.id}
                        href={subChild.href || "#"}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/sub"
                      >
                        {subChild.icon && (
                          <div
                            className={`shrink-0 text-zinc-400 group-hover/sub:text-primary transition-colors ${subChild.theme?.text}`}
                          >
                            {subChild.icon}
                          </div>
                        )}
                        <span className="text-[0.9rem] font-medium text-zinc-700 group-hover/sub:text-primary transition-colors">
                          {subChild.label}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ) : (
              <div className="p-2 min-w-[280px]">
                <ul className="flex flex-col gap-1 m-0 p-0">
                  {item.children!.map((child) => (
                    <li key={child.id} className="list-none">
                      {child.children && child.children.length > 0 ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSubId(child.id);
                          }}
                          className="flex w-full items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group/link text-left"
                        >
                          <div className="flex items-center gap-3">
                            {child.icon && (
                              <div
                                className={`shrink-0 w-8 h-8 rounded-md flex items-center justify-center ${child.theme?.bg} ${child.theme?.text} transition-transform group-hover/link:scale-105`}
                              >
                                {child.icon}
                              </div>
                            )}
                            <span className="text-[0.95rem] font-bold text-zinc-900 group-hover/link:text-primary transition-colors">
                              {child.label}
                            </span>
                          </div>
                          <ChevronRight
                            size={16}
                            strokeWidth={2.5}
                            className="text-zinc-400 group-hover/link:text-primary transition-colors"
                          />
                        </button>
                      ) : (
                        <Link
                          href={child.href || "#"}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                        >
                          {child.icon && (
                            <div
                              className={`shrink-0 w-8 h-8 rounded-md flex items-center justify-center ${child.theme?.bg} ${child.theme?.text} transition-transform group-hover/link:scale-105`}
                            >
                              {child.icon}
                            </div>
                          )}
                          <span className="text-[0.95rem] font-bold text-zinc-900 group-hover/link:text-primary transition-colors">
                            {child.label}
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Kỹ thuật: Cấu trúc Layout Grid giả lập */}
                <div className="mt-2 pt-2 border-t border-gray-100 px-2 pb-1">
                  <Link
                    href={item.href || "#"}
                    className="flex w-full items-center p-3 rounded-lg bg-transparent hover:bg-gray-50 transition-colors group/viewall text-zinc-900 hover:text-primary"
                  >
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center bg-gray-100 text-zinc-500 group-hover/viewall:bg-primary/10 group-hover/viewall:text-primary transition-all duration-200">
                        <LayoutGrid size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-[0.95rem] font-bold">
                        View All {item.label}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

const MobileNavNode = ({
  item,
  closeMenu,
  depth = 0,
}: {
  item: NavItemType;
  closeMenu: () => void;
  depth?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href || "#"}
        onClick={closeMenu}
        className={`block py-3 px-4 text-zinc-900 hover:text-primary hover:bg-gray-100 border-b border-gray-100 transition-colors ${depth === 0 ? "font-bold" : "font-medium"}`}
      >
        <div className="flex items-center gap-3">
          {item.icon && depth > 0 && (
            <span className={`${item.theme?.text} shrink-0`}>{item.icon}</span>
          )}
          <span>{item.label}</span>
        </div>
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <div className="flex w-full items-center justify-between py-1 px-2">
        <div className="flex-1 py-2 px-2 flex items-center gap-3">
          {item.icon && depth > 0 && (
            <span className={`${item.theme?.text} shrink-0`}>{item.icon}</span>
          )}
          <span
            className={`text-zinc-900 ${depth === 0 ? "font-bold" : "font-medium"}`}
          >
            {item.label}
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 text-zinc-600 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
        >
          <span
            className={`block transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className="bg-gray-50 pl-2 border-l-2 border-primary/30 ml-2 my-1 rounded-bl-md pb-2">
          {item.children!.map((child) => (
            <MobileNavNode
              key={child.id}
              item={child}
              closeMenu={closeMenu}
              depth={depth + 1}
            />
          ))}

          <Link
            href={item.href || "#"}
            onClick={closeMenu}
            className="flex items-center gap-3 py-3 px-4 mt-2 bg-transparent text-zinc-900 hover:bg-gray-50 hover:text-primary rounded-md mx-2 transition-colors group/viewall"
          >
            <div className="shrink-0 text-zinc-500 group-hover/viewall:text-primary transition-colors">
              <LayoutGrid size={18} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-[0.95rem]">
              View All {item.label}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export const HeaderNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global Desktop"
        className="hidden md:block relative z-50"
      >
        <ul className="flex items-center gap-1 text-sm m-0 p-0">
          {HEADER_NAV_DATA.map((item) => (
            <DesktopNavNode key={item.id} item={item} />
          ))}
        </ul>
      </nav>

      <button
        className="block md:hidden p-2 text-zinc-900 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-100 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-zinc-900">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-zinc-600 hover:bg-gray-100 hover:text-zinc-900 rounded-md transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-white pb-4">
              {HEADER_NAV_DATA.map((item) => (
                <MobileNavNode
                  key={item.id}
                  item={item}
                  closeMenu={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
