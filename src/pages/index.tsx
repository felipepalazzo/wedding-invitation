import React, { useState, useCallback, useRef } from 'react'
import SwiperClass from 'swiper'
import { Text, useDisclosure, useToast } from '@chakra-ui/react'
import FullPage from '@/layout/FullPage'
import Cover from '@/components/Cover'
import Slider from '@/components/Slider'
import Form from '@/components/RSVPForm'
import Modal from '@/components/Modal'
import Details from '@/components/Details'
import supabase from '@/utils/supabaseClient'
import { DB_NAME } from '../constants'

export default function Home() {
  const [error, setError] = useState('')
  const toast = useToast()
  const [modalTitle, setModalTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [arrow, showArrow] = useState(true)
  const swiperRef = useRef<SwiperClass | null>(null)

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
        <FullPage>
          <Form onSubmit={onSubmit} loading={loading} />
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
