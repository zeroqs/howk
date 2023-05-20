import styles from './radio.module.css'

const Radio = ({ register, name }: any) => {
  return (
    <form className={styles.form}>
      <input {...register(name)} id="01" type="radio" name="radio" value="1" />
      <label htmlFor="01">Radio selection 1</label>
      <input {...register(name)} id="02" type="radio" name="radio" value="2" />
      <label htmlFor="02">Radio selection 2</label>
      <input {...register(name)} id="03" type="radio" name="radio" value="3" />
      <label htmlFor="03">Radio selection 3</label>
    </form>
  )
}

export default Radio
