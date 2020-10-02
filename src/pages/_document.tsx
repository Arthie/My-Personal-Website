import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { GA_TRACKING_ID } from "../config/gtag";
import { extractCritical } from '@emotion/server'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
          >{styles.css}</style>
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