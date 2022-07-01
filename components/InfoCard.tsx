import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

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
    <div className="flex cursor-pointer border-b py-7 px-2 pr-4 transition duration-200 ease-out hover:opacity-90 hover:shadow-lg">
      <div className="relative h-24 w-40 shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="stay photo"
          className="rounded-2xl"
        />
      </div>

      <div className="flex grow flex-col pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <hr className="mt-2 w-10" />
        <p className="grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-airbnb-pink" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-right text-lg font-semibold lg:text-2xl">
              {price}
            </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InfoCard;
