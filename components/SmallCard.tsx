import Image from "next/image";

function SmallCard({ location, img, distance }: CardData) {
  return (
    <div className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl p-2 transition-transform duration-150 ease-out hover:scale-105 hover:bg-gray-100">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt={location} />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
export default SmallCard;
