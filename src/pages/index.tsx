import React from 'react'
import FullPage from '@/layout/FullPage'
import Cover from '@/components/Cover'
import Slider from '@/components/Slider'
import Form from '@/components/RSVPForm'

export default function Home() {
  return (
    <>
      <style global jsx>{`
        div#__next {
          height: 100%;
        }
      `}</style>
      <Slider>
        <Cover />
        <Form />
        <div>tests</div>
      </Slider>
    </>
  )
}
