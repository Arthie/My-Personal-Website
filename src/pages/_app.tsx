import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import * as gtag from "../config/gtag";
import { GA_TRACKING_ID } from "../config/gtag";

import "../styles/xwind.css";

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
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Inter var';
                font-weight: 100 900;
                font-display: swap;
                font-style: normal;
                font-named-instance: 'Regular';
                src: url("/fonts/Inter/Inter-roman.var.woff2?v=3.17") format("woff2");
              }
              @font-face {
                font-family: 'Inter var';
                font-weight: 100 900;
                font-display: swap;
                font-style: italic;
                font-named-instance: 'Italic';
                src: url("/fonts/Inter/Inter-italic.var.woff2?v=3.17") format("woff2");
              }`,
          }}
        ></style>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            anonymizeIp: true,
            storage: 'none',
            clientId: window.localStorage.getItem('ga_clientId')
          });
          gtag(function(tracker) {
           window.localStorage.setItem('ga_clientId', tracker.get('clientId'));
          });
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
