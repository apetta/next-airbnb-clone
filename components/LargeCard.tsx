import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, lazyOnceLabels } from "../utils/framerAnimations";

function LargeCard() {
  return (
    <motion.section
      {...lazyOnceLabels}
      variants={fadeInUp}
      className="relative py-16"
    >
      <div className="relative h-96">
        <Image
          src="https://links.papareact.com/4cj"
          fill
          className="rounded-2xl object-cover"
          alt="get inspired"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="mb-3 text-4xl">The Greatest Outdoors</h3>
        <p>Wishlists curated by Airbnb</p>

        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 ease-out hover:bg-airbnb-pink">
          Get Inspired
        </button>
      </div>
    </motion.section>
  );
}
export default LargeCard;
