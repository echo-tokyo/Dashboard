import { IPropsSort } from '../../types/props'
import styles from './Sort.module.scss'

const Sort = ({ toggleSortOrder }: IPropsSort) => {
  return (
    <div className={styles.sort}>
      <div className={styles.sortRightItem}>
        <h6 onClick={toggleSortOrder}>NAME</h6>
        {/* <img src="../../../public/Chevron.svg" alt="" /> */}
      </div>
      <div className={styles.sortRight}>
        <div className={styles.sortRightItem}>
          <h6>TYPE</h6>
          {/* <img src="../../../public/Chevron.svg" alt="" /> */}
        </div>
        <div className={styles.sortRightItem}>
          <h6>STATUS</h6>
          {/* <img src="../../../public/Chevron.svg" alt="" /> */}
        </div>
        <div className={styles.sortRightItem}>
          <h6>SITE</h6>
          {/* <img src="../../../public/Chevron.svg" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Sort