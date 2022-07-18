import { useForm } from 'react-hook-form'
const Form = () => {
  const { handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return <form onSubmit={handleSubmit(onSubmit)}></form>
}

export default Form
