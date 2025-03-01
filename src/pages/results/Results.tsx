import { useNavigate, useParams } from 'react-router-dom'
import styles from './Results.module.scss'
import Chevron from '../../../public/Chevron'
import useGetDataById from '../../hooks/api/useGetDataById'
import { IPropsResult } from '../../types/props'
import useEsc from '../../hooks/ui/useEsc'

const Results: React.FC<IPropsResult> = ({ type }) => {
  const nav = useNavigate()
  const { id } = useParams()
  const { loading, error, data } = useGetDataById(id)
  useEsc(() => nav('/'));

  if (loading) {
    return <div className={styles.container}>Loading...</div>
  }

  if (error) {
    return <div className={styles.container}>{String(error)}</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{type === 'results' ? 'Results' : 'Finalize'}</h1>
        <h4>{data?.name}</h4>
      </div>
      <div className={styles.back} onClick={() => nav('/')}>
        <Chevron />
        <h2>Back</h2>
      </div>
    </div>
  )
}

export default Results
