import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
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
        <section>
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
