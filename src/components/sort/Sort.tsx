import { IPropsSort } from '../../types/props'
import styles from './Sort.module.scss'

const Sort = ({ setSortByField }: IPropsSort) => {
  return (
    <div className={styles.sort}>
      <div className={styles.sortRightItem}>
        <h6 onClick={() => setSortByField('name')}>NAME</h6>
      </div>
      <div className={styles.sortRight}>
        <div className={styles.sortRightItem}>
          <h6 onClick={() => setSortByField('type')}>TYPE</h6>
        </div>
        <div className={styles.sortRightItem}>
          <h6 onClick={() => setSortByField('status')}>STATUS</h6>
        </div>
        <div className={styles.sortRightItem}>
          <h6 onClick={() => setSortByField('siteName')}>SITE</h6>
        </div>
      </div>
    </div>
  )
}

export default Sort