import React, { useState } from 'react'
import { Text, useDisclosure } from '@chakra-ui/react'
import Cover from '@/components/Cover'
import Slider from '@/components/Slider'
import Form from '@/components/RSVPForm'
import Modal from '@/components/Modal'
import supabase from '@/utils/supabaseClient'

export default function Home() {
  const [error, setError] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = async (data: Guest) => {
    setLoading(true)
    const { data: guest, error } = await supabase.from('guests').insert([data])
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
      <Slider>
        <Cover />
        <Form onSubmit={onSubmit} loading={loading} />
        <div>details:</div>
      </Slider>
      <Modal onClose={onClose} open={isOpen} title={modalTitle}>
        <Text>{error}</Text>
      </Modal>
    </>
  )
}
