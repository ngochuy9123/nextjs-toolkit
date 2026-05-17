import Image from "next/image";
import { Dropdown, DropDownMenu, DropdownTrigger } from "../ui/Dropdown";
import { HeaderNavigation } from "./HeaderNavigation/HeaderNavigation";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Phân vùng Logo: Cố định màu văn bản tĩnh */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              href="/"
              className="block text-2xl font-bold text-zinc-900 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            >
              Nguyen<span className="text-primary">Huy</span>
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3 md:gap-6">
            <HeaderNavigation />

            <div className="relative block z-50">
              <Dropdown>
                <DropdownTrigger>
                  <button
                    type="button"
                    className="flex items-center justify-center overflow-hidden rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary w-9 h-9 md:w-11 md:h-11 shrink-0"
                  >
                    <Image
                      src="/images/forfun/anya2.jpg"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </button>
                </DropdownTrigger>

                <DropDownMenu>
                  <div className="px-4 py-2 border-b border-gray-100 hover:bg-gray-50 text-zinc-900 cursor-pointer transition-colors text-sm">
                    <span>My Portfolio</span>
                  </div>
                  <div className="px-4 py-2 border-b border-gray-100 hover:bg-gray-50 text-zinc-900 cursor-pointer transition-colors text-sm">
                    <span>Account Info</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-red-50 text-red-600 font-medium cursor-pointer transition-colors text-sm">
                    <span>Sign Out</span>
                  </div>
                </DropDownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
