import Image from "next/image";
import logo from "../public/airbnb-logo.png";
import icon from "../public/airbnb-icon.png";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { motion, AnimatePresence } from "framer-motion";

import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { defaultLabels, fadeIn } from "../utils/framerAnimations";

function Header({ placeholder }: { placeholder?: string | null }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [guestNumber, setGuestNumber] = useState<number>(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (range: RangeKeyDict) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate?.toISOString(),
        endDate: endDate?.toISOString(),
        guestNumber,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-6 bg-white p-5 shadow-md md:grid-cols-3 md:px-10 items-center">
      {/* Left */}
      <Link href="/" scroll={false} className="h-fit w-fit">
        <div className="relative col-span-1 my-auto flex h-10 cursor-pointer items-center">
          <Image
            priority
            src={logo}
            height={40}
            alt="logo"
            className="hidden md:inline-block"
          />
          <Image
            priority
            src={icon}
            height={40}
            alt="logo"
            className="md:hidden"
          />
        </div>
      </Link>

      {/* Middle */}
      <div className="col-span-3 sm:col-span-4 flex items-center rounded-full border-2 p-2 md:col-span-1">
        <input
          value={searchInput}
          type="text"
          className="max-w-full flex-grow bg-transparent px-2 text-sm text-gray-600 outline-none placeholder:text-gray-400"
          placeholder={placeholder ?? "Where to?"}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden h-8 flex-shrink-0 rounded-full bg-red-400 p-2 text-white md:mx-1 md:inline-flex" />
      </div>
      {/* Right */}
      <div className="col-span-2 sm:col-span-1 flex items-center justify-end space-x-4 text-gray-600 md:col-span-1">
        <p className="hidden lg:inline select-none">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hidden md:inline-block" />
        <div className="flex cursor-pointer items-center space-x-2 rounded-full border-2 p-1 px-2">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-8" />
        </div>
      </div>
      <AnimatePresence>
        {searchInput && (
          <motion.div
            {...defaultLabels}
            variants={fadeIn}
            className="col-span-6 mx-auto mt-5 flex flex-col md:col-span-3"
          >
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={startDate}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
              className=""
            />
            <div className="mb-4 mt-2 flex items-center border-b">
              <h2 className="flex-grow text-2xl font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                min={1}
                value={guestNumber}
                type="number"
                className="w-12 pl-2 text-center text-lg text-airbnb-pink outline-none"
                onChange={(e) => setGuestNumber(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-around">
              <button onClick={resetInput} className="text-gray-600">
                Cancel
              </button>
              <button onClick={search} className="text-airbnb-pink">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default Header;
