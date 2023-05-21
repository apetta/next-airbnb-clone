import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "../utils/framerAnimations";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: SearchResults) {
  return (
    <motion.div
      variants={fadeInLeft}
      className="flex cursor-pointer flex-col space-y-4 last:border-b-0 border-b py-7 px-2 pr-4 transition-colors duration-300 ease-out first:border-t hover:bg-airbnb-pink/10 sm:flex-row sm:space-y-0"
    >
      <div className="relative h-48 w-full shrink-0 sm:h-24 sm:w-40 md:h-52 md:w-80">
        <Image
          src={img}
          fill
          alt="stay photo"
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="flex grow flex-col sm:pl-5">
        <div className="flex justify-between">
          <p className="text-gray-600">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <hr className="mt-2 w-10" />
        <p className="grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center font-semibold">
            <StarIcon className="h-5 pr-1 text-airbnb-pink" />
            {/* Convert to int & round to 1 dp */}
            {parseFloat(star).toFixed(1)}
          </p>
          <div>
            <p className="pb-2 text-right text-lg font-semibold lg:text-2xl">
              {price}
            </p>
            <p className="text-right font-light">{total}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default InfoCard;
