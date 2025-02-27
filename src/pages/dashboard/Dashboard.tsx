import { useEffect, useState } from 'react'
import Input from '../../components/input/Input'
import Sort from '../../components/sort/Sort'
import styles from './Dashboard.module.scss'
import axios from 'axios'
import { Test } from '../../types/api'
import Cards from '../../components/cards/Cards'

const Dashboard = () => {

  const [tests, setTests] = useState<Test[]>([])
  useEffect(() => {
    axios.get('http://localhost:3100/tests').then((response) => {
      setTests(response.data)
    })
  }, [])

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
