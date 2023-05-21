import Image from "next/image";
import { useRouter } from "next/router";
import heroImage from "../public/airbnb-hero.png";
import icon from "../public/airbnb-icon.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/framerAnimations";

function Banner() {
  const router = useRouter();
  // Today's date & T+3 days
  const today = new Date();
  const threeDays = new Date();
  threeDays.setDate(today.getDate() + 3);


  return (
    <motion.div
      variants={fadeIn}
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
    >
      <Image
        priority
        src={heroImage}
        fill
        className="object-cover w-full h-full"
        alt="hero"
      />

      <div className="absolute top-1/3 left-1/2 min-w-fit -translate-y-1/4 -translate-x-1/2 rounded-lg bg-white p-5 px-10 text-center sm:top-1/3 lg:-translate-y-0 lg:px-20 items-center flex flex-col">
        <Image src={icon} height={40} width={40} alt="hero" />
        <p className="text-md font-bold text-airbnb-pink sm:text-lg">
          Need Inspiration?
        </p>
        <button
          onClick={() =>
            router.push(
              `/search?location=London&startDate=${
                today.toISOString().split("T")[0]
              }&endDate=${
                threeDays.toISOString().split("T")[0]
              }&guestNumber=2`
            )
          }
          className="my-3 whitespace-nowrap rounded-full bg-airbnb-pink px-10 py-3 text-sm sm:text-base font-bold text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-105 active:scale-90"
        >
          Surprise Me
        </button>
      </div>

      <div className="absolute right-1 bottom-1">
        <p className="text-[10px]">
          Image by{" "}
          <a
            href="https://www.behance.net/gallery/104098983/Airbnb-Hero-Illustration"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-airbnb-pink"
          >
            Ola Szpunar
          </a>
        </p>
      </div>
    </motion.div>
  );
}
export default Banner;
