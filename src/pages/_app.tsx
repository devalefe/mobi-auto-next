import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>MobiAuto</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
