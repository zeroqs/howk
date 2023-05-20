import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

export enum inputTypes {
  text = 'text',
  password = 'password',
}

export interface InputProps {
  type: inputTypes
  isDisabled?: boolean
  placeholder?: string
  labelText?: string
  commentTip?: string
  isRequired?: boolean
  isError?: boolean
  isPassword?: boolean
  iconVisibility?: boolean
  name?: string
  register?: UseFormRegister<FieldValues>
  errors?: FieldError | undefined
}
