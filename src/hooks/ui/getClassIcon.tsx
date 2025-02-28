import styles from '../../components/sort/Sort.module.scss'
import { IGetClassIcon } from '../../types/props'

const getClassIcon = ({ sortField, field, sortOrder }: IGetClassIcon) => {
  if (sortField === field) {
    return sortOrder === 'asc' ? styles.icon : `${styles.icon} ${styles.desc}`
  }
  return ''
}

export default getClassIcon
