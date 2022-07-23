import React from 'react'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import NextButton from './NextButton'
import 'swiper/css'

interface Props {
  children: React.ReactNode
  showButton: boolean
  onSlideChange: (swipe: SwiperClass) => void
  onInit: (swipe: SwiperClass) => void
}

const Slider: React.FC<Props> = ({
  children,
  showButton,
  onSlideChange,
  onInit,
}) => (
  <Swiper
    direction="vertical"
    onSlideChangeTransitionStart={onSlideChange}
    onInit={onInit}
  >
    {React.Children.map(children, child => (
      <SwiperSlide>{child}</SwiperSlide>
    ))}
    {showButton ? <NextButton /> : null}
  </Swiper>
)

export default Slider
