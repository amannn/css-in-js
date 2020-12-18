// import '@compiled/react';

export default function App({Component, pageProps}) {
  return (
    <div>
      App
      <Component {...pageProps} />
    </div>
  );
}
