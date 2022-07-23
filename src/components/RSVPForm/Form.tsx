import React from 'react'
import joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import {
  RadioGroup,
  Radio,
  Text,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Checkbox,
  Flex,
  Center,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
import FullPage from '@/layout/FullPage'

const schema = joi.object({
  name: joi.string().required().min(5).max(50),
  rsvp: joi.string().required(),
  diet: joi.string().allow(''),
  plusone: joi.boolean(),
})

interface FormData {
  name: string
  rsvp: string
  diet?: string
  plusone?: string
}

interface Props {
  onSubmit: (data: Guest) => void
  loading: boolean
}

const Form: React.FC<Props> = ({ onSubmit, loading }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors: formErrors },
  } = useForm<FormData>({
    resolver: joiResolver(schema),
  })

  const onFormSubmit = (data: FormData) => {
    onSubmit({
      fullName: data.name,
      plusone: data.plusone,
      diet: data.diet,
      rsvp: data.rsvp,
    })
  }

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
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Controller
          name="rsvp"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <Stack direction="column" spacing={6} py={6}>
                <Radio value="1">
                  <Text variant="medium">Delighted to accept 😻</Text>
                </Radio>
                <Radio value="0">
                  <Text variant="medium">Regret to decline 😿</Text>
                </Radio>
              </Stack>
            </RadioGroup>
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <FormControl isInvalid={Boolean(fieldState.error?.message)}>
                <FormLabel>Name:</FormLabel>
                <Input {...field} placeholder="Full Name" />
                <FormErrorMessage>{formErrors.name?.message}</FormErrorMessage>
              </FormControl>
            </>
          )}
        />
        <Controller
          name="plusone"
          control={control}
          render={({ field }) => (
            <Flex w="full" justifyContent="end" pt={2}>
              <Checkbox {...field} value="1">
                <Text>Plus one?</Text>
              </Checkbox>
            </Flex>
          )}
        />
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
        <Center pt={8}>
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={loading}
            isDisabled={!watch('rsvp')}
          >
            Reply now
          </Button>
        </Center>
      </form>
    </FullPage>
  )
}

export default Form
