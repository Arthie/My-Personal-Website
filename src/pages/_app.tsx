import React from "react";
import { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider } from "@emotion/react"
import { cache } from "@emotion/css"

import 'tailwindcss/dist/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthur Petrie</title>
      </Head>
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>

    </>
  )
}

export default MyApp;
