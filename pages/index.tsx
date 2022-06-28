import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
      {/* Explore */}
    </div>
  );
};

export default Home;
