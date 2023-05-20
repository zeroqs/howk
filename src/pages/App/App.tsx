import styles from './app.module.css'
import Input from '../../shared/ui/Input/Input'
import { inputTypes } from '../../shared/ui/Input/utils'
import CheckBox from '../../shared/ui/Checkbox/Checkbox'
import Switch from '../../shared/ui/Switch/Switch'
import Radio from '../../shared/ui/Radio/Radio'
import Button from '../../shared/ui/Button/Button'
import { EButton } from '../../shared/ui/Button/utils'
import { Controller, FieldValue, useForm } from 'react-hook-form'
import Select from 'react-select'
import { customStyles, options } from '../../shared/ui/Dropdown/Dropdown'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormValues = {
  user: string
  password: string
  inputText: string
}

const schema = yup
  .object({
    user: yup.string().required(),
    password: yup.string().required(),
    typing: yup.string().required(),
    options: yup.object().required(),
    radio: yup.string().required(),
  })

  .required()

const App = () => {
  const onSubmit = (data: FieldValue<FormValues>) => {
    alert(JSON.stringify(data))
  }
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsBlock}>
            <Input
              name="user"
              register={register}
              labelText="Username"
              type={inputTypes.text}
              placeholder="Enter username"
            />
            <p>{errors?.user?.message}</p>
            <Input
              register={register}
              name="password"
              commentTip="Your password is between 4 and 12 characters"
              labelText="Password"
              type={inputTypes.password}
              placeholder="Enter password"
            />
            <p>{errors?.password?.message}</p>

            <Input
              register={register}
              name="typing"
              labelText="Input Text Label"
              type={inputTypes.text}
              placeholder="Typing"
            />
            <p>{errors?.typing?.message}</p>
          </div>
          <div className={styles.otherGroup}>
            <CheckBox text="Remember me" />
            <Switch />
            <Radio register={register} name="radio" />
            <p>{errors?.radio?.message}</p>

            <Controller
              name="options"
              control={control}
              render={({ field }) => (
                <Select {...field} styles={customStyles} options={options} />
              )}
            />
            <p>{errors?.iceCreamType?.message}</p>
          </div>
          <div className={styles.btnGroup}>
            <Button
              onClick={(e) => {
                e.preventDefault()
              }}
              text="Cancel"
              type={EButton.inherit}
            />
            <Button text="Next" type={EButton.full} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
