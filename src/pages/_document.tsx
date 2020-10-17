import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { setup } from "otion";
import {
  filterOutUnusedRules,
  getStyleElement,
  VirtualInjector,
} from "react-otion/server";
import { GA_TRACKING_ID } from "../config/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const injector = VirtualInjector();
    setup({ injector });

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {getStyleElement(filterOutUnusedRules(injector, initialProps.html))}
        </>
      ),
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
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
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument