import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const progress = new ProgressBar({
  size: 2,
  color: "#DE595E",
  className: "z-50",
  delay: 20,
});

Router.events.on("routeChangeStart", () => {
  progress.start();
});

Router.events.on("routeChangeComplete", () => {
  progress.finish();
});

Router.events.on("routeChangeError", () => {
  progress.finish();
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <div className="h-full min-w-[320px] scrollbar-hide">
        <Head>
          <title>Airbnb Clone</title>
          <link rel="icon" href="/airbnb-icon.png" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component key={router?.route} {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
