import Image from "next/image";
import heroImage from "../public/airbnb-hero.png";
import icon from "../public/airbnb-icon.png";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={heroImage} layout="fill" objectFit="cover" alt="hero" />
      <div className="absolute top-1/3 left-1/2 min-w-fit -translate-y-1/4 -translate-x-1/2 rounded-lg bg-white p-5 px-10 text-center  sm:top-1/3 lg:-translate-y-0 lg:px-20">
        <Image
          src={icon}
          objectFit="contain"
          height={40}
          width={40}
          alt="hero"
        />
        <p className="text-md font-bold text-airbnb-pink sm:text-lg">
          Not sure where to go?
        </p>
        <button className="my-3 rounded-full bg-airbnb-pink px-10 py-3 font-bold text-white shadow-md transition-transform duration-200 ease-in-out hover:shadow-xl active:scale-90">
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
    </div>
  );
}
export default Banner;
