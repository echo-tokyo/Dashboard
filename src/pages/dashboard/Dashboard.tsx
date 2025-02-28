import Input from '../../components/input/Input'
import Sort from '../../components/sort/Sort'
import styles from './Dashboard.module.scss'
import Cards from '../../components/cards/Cards'
import useGetData from '../../hooks/useGetData'

const Dashboard = () => {
  const {loading, error, tests} = useGetData()
  
  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Input />
      <Sort />
      <Cards tests={tests} />
    </div>
  )
}

export default Dashboard