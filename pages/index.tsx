import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { motion } from "framer-motion";
import {
  fadeInUp,
  stagger,
  pageTransition,
  animLabels,
} from "../utils/framerAnimations";

const Home = ({ exploreData, liveAnywhereData }: ApiRes) => {
  return (
    <motion.div {...animLabels} variants={pageTransition} className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/airbnb-icon.png" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main */}
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <motion.h2
            variants={fadeInUp}
            className="pb-5 text-4xl font-semibold"
          >
            Explore Nearby
          </motion.h2>
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {exploreData?.map((item, _) => (
              <SmallCard
                key={_}
                location={item.location}
                img={item.img}
                distance={item.distance}
              />
            ))}
          </motion.div>
        </section>

        <section className="py-5">
          <motion.h2
            variants={fadeInUp}
            className="py-8 text-4xl font-semibold"
          >
            Live Anywhere
          </motion.h2>

          <motion.div
            variants={stagger}
            className="-ml-3 flex space-x-5 overflow-scroll p-3 scrollbar-hide"
          >
            {liveAnywhereData?.map((item, _: number) => (
              <MediumCard key={_} img={item.img} title={item.title} />
            ))}
          </motion.div>
        </section>

        <LargeCard />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );

  const liveAnywhereData = await fetch("https://jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      liveAnywhereData,
    },
  };
}
