import { useNavigate, useParams } from 'react-router-dom'
import styles from './Results.module.scss' 
import Chevron from '../../../public/Chevron'

const Results = () => {
  const { id } = useParams()
  const nav = useNavigate()
  console.log(id)
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Results</h1>
        <h4>Order basket redesing</h4>
      </div>
      <div className={styles.back} onClick={() => nav('/')}>
        <Chevron />
        <h2>Back</h2>
      </div>
    </div>
  )
}

export default Results
