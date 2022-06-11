import React from 'react'
import Head from 'next/head'
import Cover from '../components/Cover/Cover'

export default function Home() {
  return (
    <>
      <Head>
        <title>Paulina &amp; Felipe &hearts;</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
    </>
  )
}
