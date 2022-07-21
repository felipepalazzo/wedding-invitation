import React, { useState, useRef } from 'react'
import SwiperClass from 'swiper'
import { Button, Text, useDisclosure } from '@chakra-ui/react'
import FullPage from '@/layout/FullPage'
import Cover from '@/components/Cover'
import Slider from '@/components/Slider'
import Form from '@/components/RSVPForm'
import Modal from '@/components/Modal'
import supabase from '@/utils/supabaseClient'
import { DB_NAME } from '../constants'

export default function Home() {
  const [error, setError] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [arrow, showArrow] = useState(false)
  const swiperRef = useRef<SwiperClass | null>(null)

  const onSubmit = async (data: Guest) => {
    setLoading(true)
    const { data: guest, error } = await supabase.from(DB_NAME).insert([data])
    setLoading(false)
    if (error) {
      setModalTitle('Ooops!')
      setError(error.message)
      onOpen()
      return
    }

    if (guest) {
      // confirmation modal pops
    }
  }

  return (
    <>
      <style global jsx>{`
        div#__next {
          height: 100%;
        }
      `}</style>
      <Slider onInit={() => showArrow(true)}>
        <FullPage>
          <Cover />
          {arrow ? <Button>slide down</Button> : null}
        </FullPage>
        <Form onSubmit={onSubmit} loading={loading} />
        <div>details:</div>
      </Slider>
      <Modal onClose={onClose} open={isOpen} title={modalTitle}>
        <Text>{error}</Text>
      </Modal>
    </>
  )
}
