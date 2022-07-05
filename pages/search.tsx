import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { motion } from "framer-motion";
import {
  animLabels,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  pageTransition,
  stagger,
} from "../utils/framerAnimations";

function Search({ searchResults }: { searchResults: SearchResults[] }) {
  const router = useRouter();

  const {
    location,
    startDate = new Date(),
    endDate = new Date(),
    guestNumber,
  } = router.query;

  const formattedStartDate = format(
    new Date(startDate as unknown as Date),
    "dd MMMM yy"
  );
  const formattedEndDate = format(
    new Date(endDate as unknown as Date),
    "dd MMMM yy"
  );

  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <motion.div {...animLabels} variants={pageTransition}>
      <Header
        placeholder={`${location} | ${dateRange} | ${guestNumber} Guest`}
      />

      <main className="flex">
        <section className="grow px-6 pt-5">
          <motion.div variants={fadeInLeft}>
            <p className="text-xs">
              300+ Stays - {dateRange} for {guestNumber} Guests
            </p>
            <h1 className="mt-2 mb-6 text-3xl font-semibold">
              Stays in London
            </h1>
            <motion.div
              variants={stagger}
              className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex"
            >
              <motion.p variants={fadeInLeft} className="button">
                Cancellation Flexibility
              </motion.p>
              <motion.p variants={fadeInLeft} className="button">
                Type of Place
              </motion.p>
              <motion.p variants={fadeInLeft} className="button">
                Price
              </motion.p>
              <motion.p variants={fadeInLeft} className="button">
                Rooms and Beds
              </motion.p>
              <motion.p variants={fadeInLeft} className="button">
                More Filters
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger}>
            {searchResults?.map((result, _) => (
              <InfoCard key={_} {...result} />
            ))}
          </motion.div>
        </section>

        <motion.section
          variants={fadeIn}
          className="sticky top-0 hidden h-screen xl:inline xl:min-w-[600px]"
        >
          <Map searchResults={searchResults} />
        </motion.section>
      </main>
      <Footer />
    </motion.div>
  );
}
export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
