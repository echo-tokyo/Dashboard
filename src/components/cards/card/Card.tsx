import useRandomColor from '../../../hooks/ui/useRandomColor'
import useRemovePrefixes from '../../../hooks/ui/useRemovePrefixes'
import useStatusColor from '../../../hooks/ui/useStatusColor'
import { Test } from '../../../types/api'
import Button from '../../button/Button'
import styles from '../Cards.module.scss'

const Card = ({ test }: { test: Test }) => {
  const { cleanedUrl } = useRemovePrefixes(test)
  const { color: randomColor } = useRandomColor()
  const { statusColor } = useStatusColor()

  return (
    <div className={styles.card}>
      <div
        className={styles.border}
        style={{ backgroundColor: randomColor }}
      ></div>
      <h5>{test.name}</h5>
      <div className={styles.cardRight}>
        <p>{test.type}</p>
        <p
          className={styles.status}
          style={{ color: statusColor(test.status) }}
        >
          {test.status}
        </p>
        <p>{cleanedUrl}</p>
        {test.status === 'DRAFT' ? (
          <Button styles={'finalize'} />
        ) : (
          <Button styles={'results'} />
        )}
      </div>
    </div>
  )
}

export default Card
