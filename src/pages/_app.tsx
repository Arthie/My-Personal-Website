import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import * as gtag from "../config/gtag";
import "../styles/base.css";

function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Arthur Petrie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Personal website Arthur Petrie" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
