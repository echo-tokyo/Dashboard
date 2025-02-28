// Sort.tsx
import { IPropsSort } from '../../types/props'
import styles from './Sort.module.scss'
import SortRightItem from './SortRightItem'

const Sort = ({ setSortByField, sortField, sortOrder }: IPropsSort) => {
  return (
    <div className={styles.sort}>
      <div className={styles.sortRightItem}>
        <SortRightItem
          field='name'
          sortField={sortField}
          sortOrder={sortOrder}
          setSortByField={setSortByField}
        />
      </div>
      <div className={styles.sortRight}>
        <SortRightItem
          field='type'
          sortField={sortField}
          sortOrder={sortOrder}
          setSortByField={setSortByField}
        />
        <SortRightItem
          field='status'
          sortField={sortField}
          sortOrder={sortOrder}
          setSortByField={setSortByField}
        />
        <SortRightItem
          field='siteName'
          sortField={sortField}
          sortOrder={sortOrder}
          setSortByField={setSortByField}
        />
      </div>
    </div>
  )
}

export default Sort