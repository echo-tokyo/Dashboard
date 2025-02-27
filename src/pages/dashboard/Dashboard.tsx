import Card from '../../components/card/Card'
import Input from '../../components/input/Input'
import Sort from '../../components/sort/Sort'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Input />
      <Sort />
      <Card />
    </div>
  )
}

export default Dashboard
