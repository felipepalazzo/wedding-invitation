import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextButton from './NextButton'
import 'swiper/css'

interface Props {
  children: React.ReactNode
}

const Slider: React.FC<Props> = ({ children }) => {
  const [button, showButton] = useState(false)

  return (
    <Swiper direction="vertical" onInit={() => showButton(true)}>
      {React.Children.map(children, child => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
      {button ? <NextButton /> : null}
    </Swiper>
  )
}

export default Slider
