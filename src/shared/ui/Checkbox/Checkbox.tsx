import { CheckboxProps } from './utils'
import styles from './checkbox.module.css'

const CheckBox = ({ text }: CheckboxProps) => {
  return (
    <div className={styles.checkbox__wrapper}>
      <input
        id="checkbox"
        name="checkbox"
        className={styles.customCheckbox}
        type="checkbox"
      />
      <label htmlFor="checkbox">{text}</label>
    </div>
  )
}

export default CheckBox
