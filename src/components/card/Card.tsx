import Button from '../button/Button'
import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.border}></div>
        <h4>Order basket redesign</h4>
        <div className={styles.cardRight}>
          <p>Classic</p>
          <p className={styles.status}>Online</p>
          <p>market.company.com</p>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Card