import React, { useState, useCallback, useRef, useEffect } from 'react'
import SwiperClass from 'swiper'
import canvasConfetti, { CreateTypes, Options } from 'canvas-confetti'
import { Text, useDisclosure, useToast } from '@chakra-ui/react'
import FullPage from '@/layout/FullPage'
import Cover from '@/components/Cover'
import Slider from '@/components/Slider'
import Form from '@/components/RSVPForm'
import Modal from '@/components/Modal'
import Details from '@/components/Details'
import supabase from '@/utils/supabaseClient'
import { DB_NAME } from '../constants'

const animationOpts: Options = {
  startVelocity: 30,
  zIndex: 999,
  spread: 360,
}

const randomInRange = (min: number, max: number) =>
  Math.random() * (max - min) + min

export default function Home() {
  const [error, setError] = useState('')
  const toast = useToast()
  const [modalTitle, setModalTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [arrow, showArrow] = useState(true)
  const [fireworks, showFireworks] = useState(false)
  const swiperRef = useRef<SwiperClass | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const refAnimationInstance = useRef<CreateTypes | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      refAnimationInstance.current = canvasConfetti.create(canvasRef.current, {
        useWorker: true,
        resize: true,
      })
    }
  }, [canvasRef])

  useEffect(() => {
    if (fireworks) {
      const animationEnd = Date.now() + 2000
      const id = setInterval(() => {
        const timeLeft = animationEnd - Date.now()
        if (timeLeft <= 0) {
          refAnimationInstance.current?.reset()
          clearInterval(id)
        }
        if (refAnimationInstance.current) {
          refAnimationInstance.current({
            ...animationOpts,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        }
      }, 250)
    }
  }, [fireworks])

  const onSubmit = async (data: Guest) => {
    setLoading(true)
    const { data: guest, error } = await supabase
      .from<Guest>(DB_NAME)
      .insert([data])
    setLoading(false)

    if (error) {
      setModalTitle('Ooops!')
      setError(error.message)
      onOpen()
      return
    }

    if (guest) {
      const { fullName, rsvp } = guest[0]
      if (rsvp) {
        toast({
          title: 'Thank you',
          description: `${fullName}, you're now on the guest list!`,
          status: 'success',
          variant: 'success',
          position: 'top',
        })
        swiperRef.current?.slideNext()
      } else {
        toast({
          title: 'Thank you',
          description: `${fullName}, your answer has been submitted`,
          status: 'success',
          variant: 'success',
          position: 'top',
        })
        swiperRef.current?.disable()
      }
    }
  }

  const onSlideChange = useCallback((swiper: SwiperClass) => {
    showArrow(swiper.activeIndex === 0)
  }, [])

  return (
    <>
      <style global jsx>{`
        div#__next {
          height: 100%;
        }
      `}</style>
      <Slider
        showButton={arrow}
        onSlideChange={onSlideChange}
        onInit={swipe => {
          swiperRef.current = swipe
        }}
      >
        <FullPage>
          <Cover />
        </FullPage>
        <FullPage
          onKeyPadShow={() => {
            swiperRef.current?.updateSize()
          }}
          onKeyPadHide={() => {
            swiperRef.current?.updateSize()
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: fireworks ? 'block' : 'none',
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <Form
            onSubmit={onSubmit}
            loading={loading}
            onRSVPclick={showFireworks}
          />
        </FullPage>
        <FullPage>
          <Details />
        </FullPage>
      </Slider>
      <Modal onClose={onClose} open={isOpen} title={modalTitle}>
        <Text>{error}</Text>
      </Modal>
    </>
  )
}
