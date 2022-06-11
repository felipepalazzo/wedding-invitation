import Head from 'next/head'
import React from 'react'
import Cover from '../components/Cover/Cover'

export default function Home() {
  return (
    <>
      <Head>
        <title>Paulina | Felipe &hearts;</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
    </>
  )
}
