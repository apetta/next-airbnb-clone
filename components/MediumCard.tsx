import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/framerAnimations";

function MediumCard({ img, title }: CardData) {
  return (
    <motion.div variants={fadeInUp}>
      <div className="cursor-pointer transition-transform duration-300 ease-out hover:scale-105">
        <div className="relative h-80 w-80">
          <Image
            src={img}
            fill
            className="rounded-lg"
            alt={title || ""}
          />
        </div>
        <h3 className="mt-3 text-2xl">{title}</h3>
      </div>
    </motion.div>
  );
}
export default MediumCard;
