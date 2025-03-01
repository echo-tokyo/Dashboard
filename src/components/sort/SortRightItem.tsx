import React from 'react'
import getClassIcon from '../../hooks/ui/getClassIcon'
import styles from './Sort.module.scss'
import { ISortRightItemProps } from '../../types/props'

const SortRightItem: React.FC<ISortRightItemProps> = ({
  field,
  sortField,
  sortOrder,
  setSortByField,
}) => {
  return (
    <div className={styles.sortRightItem}>
      <h6 onClick={() => setSortByField(field)}>{field.toUpperCase()}</h6>
      {sortField === field && (
        <img
          src='../../../public/Chevron.svg'
          alt=''
          className={getClassIcon({ sortField, field, sortOrder })}
        />
      )}
    </div>
  )
}

export default SortRightItem