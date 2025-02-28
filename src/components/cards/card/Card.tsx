import useRandomColor from '../../../hooks/useRanomColor'
import useRemovePrefixes from '../../../hooks/useRemovePrefixes'
import { Test } from '../../../types/api'
import Button from '../../button/Button'
import styles from '../Cards.module.scss'

const Card = ({ test }: { test: Test }) => {
  const { cleanedUrl } = useRemovePrefixes(test)
  const {color : randomColor} = useRandomColor()

  const statusColor = (status:string) => {
    switch (status) {
      case 'PAUSED':
        return '#FF8346';
      case 'DRAFT':
        return '#5C5C5C';
      case 'STOPPED':
        return '#FE4848';
      case 'ONLINE':
        return '#1BDA9D';
      default:
        return '#000000';
    }
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.border}
        style={{backgroundColor: randomColor}}
      ></div>
      <h6>{test.name}</h6>
      <div className={styles.cardRight}>
        <p>{test.type}</p>
        <p className={styles.status} style={{color: statusColor(test.status)}}>{test.status}</p>
        <p>{cleanedUrl}</p>
        <Button />
      </div>
    </div>
  )
}

export default Card
