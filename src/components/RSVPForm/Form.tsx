import { RadioGroup, Radio, Text, Button } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'

const Form = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="confirmed"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Radio value="1">
              <Text>Delighted to accept</Text>
            </Radio>
            <Radio value="0">
              <Text>Regret to decline</Text>
            </Radio>
          </RadioGroup>
        )}
      />
      <Button type="submit">Reply now</Button>
    </form>
  )
}

export default Form
