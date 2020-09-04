// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import NextDocument, { DocumentContext } from "next/document";

import css from "../config/stitches.config";

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    try {
      let extractedStyles
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage)
        extractedStyles = styles
        return result
      }

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content.replace(/---/g, "--") }}
              />
            ))}
          </>
        ),
      }
    } finally {
    }
  }
}

export default Document;
