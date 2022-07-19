import React, { useState } from 'react'
import {
  Box,
  RadioGroup,
  Radio,
  Text,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  VStack,
  Select,
  HStack,
  Checkbox,
  Flex,
  Center,
} from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
import FullPage from '@/layout/FullPage'

const Form = () => {
  const [plusone, setPlusone] = useState(false)
  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <FullPage>
      <Text
        fontFamily="playfair"
        fontSize="7xl"
        variant="bold"
        textTransform="uppercase"
      >
        rvsp
      </Text>
      <Text>Kindly reply by 31st January 2023</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="confirmed"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack direction="row" spacing={6} py={6}>
                <Radio value="1">
                  <Text>Delighted to accept</Text>
                </Radio>
                <Radio value="0">
                  <Text>Regret to decline</Text>
                </Radio>
              </Stack>
            </RadioGroup>
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <>
              <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input {...field} placeholder="Full Name" />
              </FormControl>
              <Flex w="full" justifyContent="end" pt={2}>
                <Checkbox onChange={e => setPlusone(e.target.checked)}>
                  <Text>Plus one?</Text>
                </Checkbox>
              </Flex>
            </>
          )}
        />
        {plusone ? (
          <Box pb={6}>
            <Controller
              name="plusone"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Name:</FormLabel>
                  <Input {...field} />
                </FormControl>
              )}
            />
          </Box>
        ) : null}
        <Controller
          name="diet"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Dietary requirements:</FormLabel>
              <Input {...field} placeholder="eg. allergies, vegetarian" />
            </FormControl>
          )}
        />
        <Center pt={6}>
          <Button type="submit">Reply now</Button>
        </Center>
      </form>
    </FullPage>
  )
}

export default Form
