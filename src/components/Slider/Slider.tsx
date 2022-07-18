import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Slider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Swiper direction="vertical">
    {React.Children.map(children, child => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
  </Swiper>
)

export default Slider
