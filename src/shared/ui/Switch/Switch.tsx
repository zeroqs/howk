import styles from './switch.module.css'
import { useState } from 'react'

const Switch = () => {
  const [isActive, setIsActive] = useState(false)

  const activeHandler = () => {
    setIsActive(!isActive)
  }
  return (
    <>
      <div className={styles.switch}>
        <input onClick={activeHandler} id="switch__input" type="checkbox" />
        <label htmlFor="switch__input"></label>
        {isActive ? (
          <span className={styles.span}>Off</span>
        ) : (
          <span className={styles.span}>On</span>
        )}
      </div>
    </>
  )
}

export default Switch
