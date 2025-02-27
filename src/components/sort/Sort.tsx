import styles from './Sort.module.scss'

const Sort = () => {
  return (
    <div className={styles.sort}>
      <div className={styles.sortRightItem}>
        <h5>NAME</h5>
        {/* <img src="../../../public/Chevron.svg" alt="" /> */}
      </div>
      <div className={styles.sortRight}>
        <div className={styles.sortRightItem}>
          <h5>TYPE</h5>
          <img src="../../../public/Chevron.svg" alt="" />
        </div>
        <div className={styles.sortRightItem}>
          <h5>STATUS</h5>
          {/* <img src="../../../public/Chevron.svg" alt="" /> */}
        </div>
        <div className={styles.sortRightItem}>
          <h5>SITE</h5>
          {/* <img src="../../../public/Chevron.svg" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Sort