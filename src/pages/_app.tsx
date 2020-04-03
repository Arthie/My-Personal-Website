import React from "react";
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthur Petrie</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
