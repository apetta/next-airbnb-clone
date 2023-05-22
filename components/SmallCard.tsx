import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/framerAnimations";
import { useRouter } from "next/router";

function SmallCard({ location, img, distance }: CardData) {
  const router = useRouter();
  // Today's date & T+3 days
  const today = new Date();
  const threeDays = new Date();
  threeDays.setDate(today.getDate() + 3);

  return (
    <motion.div variants={fadeInUp}>
      <button
        className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl p-2 text-left transition-transform duration-150 ease-out hover:scale-105 hover:bg-gray-100"
        onClick={() =>
          router.push(
            `/search?location=${location}&startDate=${
              today.toISOString().split("T")[0]
            }&endDate=${threeDays.toISOString().split("T")[0]}&guestNumber=2`
          )
        }
      >
        <div className="relative h-16 w-16">
          <Image
            src={img}
            fill
            className="rounded-lg"
            alt={location + " image"}
          />
        </div>

        <div>
          <h2>{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
        </div>
      </button>
    </motion.div>
  );
}
export default SmallCard;
