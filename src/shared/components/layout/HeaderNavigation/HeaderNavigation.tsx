"use client";

import Link from "next/link";
import { HEADER_NAV_DATA, NavItemType } from "./navigation.config";
import { useState, useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

const DesktopNavNode = ({ item }: { item: NavItemType }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  useClickOutside(containerRef, () => {
    setIsLocked(false);
    setIsHovered(false);
  });

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
      onMouseLeave={() => setIsHovered(false)}
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
        <div className="absolute top-full left-0 pt-2 z-50">
          {/* Thay đổi padding và độ rộng tùy thuộc vào cấp độ lồng nhau */}
          <ul className="min-w-[320px] bg-white border border-gray-200 shadow-xl rounded-xl p-2 flex flex-col gap-1">
            {item.children!.map((child) => (
              <li key={child.id} className="list-none group relative">
                <Link
                  href={child.href || "#"}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                >
                  {child.icon && child.theme && (
                    <div
                      className={`shrink-0 mt-0.5 w-10 h-10 rounded-lg flex items-center justify-center ${child.theme.bg} ${child.theme.text} transition-transform group-hover/link:scale-105`}
                    >
                      {child.icon}
                    </div>
                  )}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.95rem] font-bold text-zinc-900 group-hover/link:text-primary transition-colors">
                        {child.label}
                      </span>
                      {child.children && (
                        <span className="text-zinc-400">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </span>
                      )}
                    </div>
                    {child.description && (
                      <span className="text-[0.8rem] text-zinc-500 leading-snug mt-0.5">
                        {child.description}
                      </span>
                    )}
                  </div>
                </Link>

                {/* Render Recursive Child Nodes for Depth > 1 (e.g., Data Format -> JSON Formatter) */}
                {child.children && (
                  <div className="hidden group-hover:block absolute top-0 left-full pl-2 z-50 w-full min-w-[320px]">
                    <ul className="bg-white border border-gray-200 shadow-xl rounded-xl p-2 flex flex-col gap-1">
                      {child.children.map((subChild) => (
                        <li key={subChild.id} className="list-none">
                          <Link
                            href={subChild.href || "#"}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/sublink"
                          >
                            {subChild.icon && subChild.theme && (
                              <div
                                className={`shrink-0 mt-0.5 w-10 h-10 rounded-lg flex items-center justify-center ${subChild.theme.bg} ${subChild.theme.text} transition-transform group-hover/sublink:scale-105`}
                              >
                                {subChild.icon}
                              </div>
                            )}
                            <div className="flex flex-col">
                              <span className="text-[0.95rem] font-bold text-zinc-900 group-hover/sublink:text-primary transition-colors">
                                {subChild.label}
                              </span>
                              {subChild.description && (
                                <span className="text-[0.8rem] text-zinc-500 leading-snug mt-0.5">
                                  {subChild.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
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
        <div className="bg-gray-50 pl-2 border-l-2 border-primary/30 ml-2 my-1 rounded-bl-md">
          {item.children!.map((child) => (
            <MobileNavNode
              key={child.id}
              item={child}
              closeMenu={closeMenu}
              depth={depth + 1}
            />
          ))}
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

            <div className="flex-1 overflow-y-auto bg-white">
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
