import Image from "next/image";
import logo from "../public/airbnb-logo.png";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          alt="logo"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center rounded-full border-2 p-2">
        <input
          type="text"
          className="max-w-full flex-grow bg-transparent px-2 text-sm text-gray-600 outline-none placeholder:text-gray-400"
          placeholder="Where to?"
        />
        <SearchIcon className="hidden h-8 flex-shrink-0 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-1 md:inline-flex" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden lg:inline">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex cursor-pointer items-center space-x-2 rounded-full border-2 p-1 px-2">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-8" />
        </div>
      </div>
    </header>
  );
}
export default Header;
