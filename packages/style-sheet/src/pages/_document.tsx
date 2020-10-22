import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {getCss} from 'style-sheet/babel';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    console.log('here');

    console.log(getCss());

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{__html: styles.css}}
          /> */}
        </>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
