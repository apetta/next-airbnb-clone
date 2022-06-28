import Image from "next/image";
import logo from "../public/airbnb-logo.png";
import { SearchIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky top-0 shadow-md z-50 p-5 grid grid-cols-3 bg-white md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          alt="logo"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center border-2 rounded-full p-2">
        <input
          type="text"
          className="outline-none px-2 bg-transparent flex-grow text-gray-600 text-sm placeholder:text-gray-400 max-w-full"
          placeholder="Where to?"
        />
        <SearchIcon className="hidden md:inline-flex h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:mx-1 flex-shrink-0" />
      </div>
      {/* Right */}
      <div></div>
    </header>
  );
}
export default Header;
