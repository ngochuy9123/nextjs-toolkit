"use client";

import Link from "next/link";
import { HEADER_NAV_DATA, NavItemType } from "./navigation.config";
import { useState, useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

const DesktopNavNode = ({
  item,
  depth = 0,
}: {
  item: NavItemType;
  depth?: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const hasChildren = item.children && item.children.length > 0;
  const dropdownPosition =
    depth === 0 ? "top-full left-0 mt-1" : "top-0 left-full ml-1";

  if (!hasChildren) {
    return (
      <li ref={containerRef} className="list-none">
        <Link
          href={item.href || "#"}
          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors whitespace-nowrap rounded-md"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={containerRef} className="relative list-none">
      <div className="flex items-center justify-between px-1 py-1 rounded-md hover:bg-gray-50 transition-colors">
        <Link
          href={item.href || "#"}
          className="px-3 py-1 text-gray-600 hover:text-blue-600 whitespace-nowrap flex-1 font-medium"
        >
          {item.label}
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-md transition-colors ${
            isOpen
              ? "text-blue-600 bg-blue-100"
              : "text-gray-400 hover:bg-gray-200"
          }`}
          aria-expanded={isOpen}
        >
          <span
            className={`block text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            {depth === 0 ? "▼" : "▶"}
          </span>
        </button>
      </div>

      {isOpen && (
        <ul
          className={`absolute ${dropdownPosition} min-w-48 bg-white border border-gray-100 shadow-lg rounded-md py-1 z-50`}
        >
          {item.children!.map((child) => (
            <DesktopNavNode key={child.id} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileNavNode = ({
  item,
  closeMenu,
}: {
  item: NavItemType;
  closeMenu: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href || "#"}
        onClick={closeMenu}
        className="block py-3 px-4 text-gray-600 hover:bg-gray-50 border-b border-gray-50"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-50">
      <div className="flex w-full items-center justify-between py-1 px-2">
        <Link
          href={item.href || "#"}
          onClick={closeMenu}
          className="flex-1 py-2 px-2 text-gray-700 font-medium active:text-blue-600"
        >
          {item.label}
        </Link>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 text-gray-500 hover:bg-gray-100 rounded-md"
        >
          <span
            className={`block transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className="bg-gray-50 pl-4 border-l-2 border-gray-200 ml-4 my-1">
          {item.children!.map((child) => (
            <MobileNavNode key={child.id} item={child} closeMenu={closeMenu} />
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
        <ul className="flex items-center gap-1 text-sm font-medium">
          {HEADER_NAV_DATA.map((item) => (
            <DesktopNavNode key={item.id} item={item} />
          ))}
        </ul>
      </nav>

      <button
        className="block md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
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
