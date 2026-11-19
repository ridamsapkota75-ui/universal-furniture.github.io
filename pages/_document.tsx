import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#07182F" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo/ufi-logo.png" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://wa.me" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
