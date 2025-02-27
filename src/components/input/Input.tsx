import styles from './Input.module.scss'

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor='inputField' className={styles.labelLeft}>
      <img src="../../../public/Search.svg" alt="" />
      </label>
      <input placeholder='What test are you looking for?' id='inputField' type='text' className={styles.input} />
      <span className={styles.labelRight}>7 tests</span>
    </div>
  )
}

export default Input
