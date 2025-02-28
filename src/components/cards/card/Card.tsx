import { Test } from '../../../types/api'
import Button from '../../button/Button'
import styles from '../Cards.module.scss'

const Card = ({test} : {test:Test}) => {
  return (
    <div className={styles.card}>
      <div className={styles.border}></div>
      <h4>{test.name}</h4>
      <div className={styles.cardRight}>
        <p>{test.type}</p>
        <p className={styles.status}>{test.status}</p>
        <p>{test.siteName}</p>
        <Button />
      </div>
    </div>
  )
}

export default Card
