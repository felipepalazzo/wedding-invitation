import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="SAVE THE DATE" />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1277" />
        <meta property="og:site_name" content="Paulina &amp; Felipe Wedding" />
        <meta property="og:url" content="http://paulinafelipe.day" />
        <meta
          property="og:description"
          content="Start packing and get ready: you have been invited to the greatest event of the year"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://gczfgjjqaugqbtjzaidz.supabase.co/storage/v1/object/sign/img/IMG_3765.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvSU1HXzM3NjUuSlBHIiwiaWF0IjoxNjU4NTk5MTU4LCJleHAiOjE5NzM5NTkxNTh9.CDOf4Bx0J35eLRQNA2O8ECbr39n7mNtQtm7qFlRWrvU"
        />
        <meta name="twitter:title" content="SAVE THE DATE" />
        <meta
          name="twitter:description"
          content="Start packing and get ready: you have been invited to the greatest event of the year"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://gczfgjjqaugqbtjzaidz.supabase.co/storage/v1/object/sign/img/IMG_3765.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvSU1HXzM3NjUuSlBHIiwiaWF0IjoxNjU4NTk5MTU4LCJleHAiOjE5NzM5NTkxNTh9.CDOf4Bx0J35eLRQNA2O8ECbr39n7mNtQtm7qFlRWrvU"
        />
        <meta name="twitter:url" content="http://paulinafelipe.day" />
        <title>Paulina &amp; Felipe Wedding</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
