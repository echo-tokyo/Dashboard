import { IPropsInput } from '../../types/props'
import styles from './Input.module.scss'

const Input = ({setHandleChange, handleChange, testsCount}: IPropsInput) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor='inputField' className={styles.labelLeft}>
      <img src="../../../public/Search.svg" alt="" />
      </label>
      <input onChange={e => setHandleChange(e.target.value)} value={handleChange} placeholder='What test are you looking for?' id='inputField' type='text' className={styles.input} autoComplete="off"/>
      <span className={styles.labelRight}>{testsCount} tests</span>
    </div>
  )
}

export default Input
