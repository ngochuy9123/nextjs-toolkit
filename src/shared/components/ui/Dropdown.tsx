"use client";

import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useState, ReactNode, createContext, useContext, useRef } from "react";
interface DropDownContextType {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: (value: boolean) => void;
}

const DropdownContext = createContext<DropDownContextType | undefined>(
  undefined,
);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error("Error DropDown");
  }
  return context;
};

export const DropdownTrigger = ({ children }: { children: ReactNode }) => {
  const { toggle } = useDropdownContext();
  return (
    <div onClick={toggle} className="cursor-pointer select-none">
      {children}
    </div>
  );
};

export const DropDownMenu = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useDropdownContext();
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg border border-gray-200 rounded-md">
      {children}
    </div>
  );
};

export const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const contextValue = { isOpen, toggle, setIsOpen };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));
  return (
    <DropdownContext.Provider value={contextValue}>
      <div ref={dropdownRef} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
