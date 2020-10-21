import {cache} from '@emotion/css';
import {css, Global, CacheProvider} from '@emotion/react';

// see: https://nextjs.org/docs/advanced-features/custom-app
export default function App({Component, pageProps}) {
  return (
    <CacheProvider value={cache}>
      <Global
        styles={css`
          html,
          body {
            padding: 3rem 1rem;
            margin: 0;
            background: papayawhip;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
      <Component {...pageProps} />
    </CacheProvider>
  );
}
