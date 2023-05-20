import { InputProps } from './utils'
import styles from './input.module.css'
import clsx from 'clsx'
import ErrorSvg from '../../../assets/icon-warning.svg'

const Input = ({
  isError,
  placeholder,
  type,
  labelText,
  commentTip,
  name,
  register,
}: InputProps) => {
  const classNameInput = clsx({
    [styles.input]: true,
    [styles.error]: isError,
  })

  return (
    <label className={styles.label}>
      {labelText}
      <div className={styles.inputBlock}>
        <input
          {...(register && name && { ...register(name) })}
          className={classNameInput}
          placeholder={placeholder}
          type={type}
        />
        {isError && <img className={styles.errorSvg} src={ErrorSvg} />}
      </div>
      <p className={commentTip}>{commentTip}</p>
    </label>
  )
}

export default Input
