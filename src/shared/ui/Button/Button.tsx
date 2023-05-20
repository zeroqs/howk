import { EButton, IButton } from './utils'
import clsx from 'clsx'
import styles from './button.module.css'

const Button = ({ text, type, onClick, disabled }: IButton) => {
  const classNameInput = clsx({
    [styles.button]: true,
    [styles.full]: type === EButton.full,
    [styles.inherit]: type === EButton.inherit,
    [styles.disabled]: disabled,
  })
  console.log(disabled)
  return (
    <button disabled={disabled} onClick={onClick} className={classNameInput}>
      {text}
    </button>
  )
}

export default Button
