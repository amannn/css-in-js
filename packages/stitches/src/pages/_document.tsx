import NextDocument from 'next/document';
import {css} from 'style';

export default class Document extends NextDocument {
  static async getInitialProps(context) {
    const originalRenderPage = context.renderPage;

    let styles;
    context.renderPage = () => {
      let renderResult;
      const styleResult = css.getStyles(() => {
        renderResult = originalRenderPage();
      });
      styles = styleResult.styles;

      return renderResult;
    };

    const initialProps = await NextDocument.getInitialProps(context);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{__html: styles}}></style>
        </>
      )
    };
  }
}
