import Input from '../../components/input/Input'
import Sort from '../../components/sort/Sort'
import styles from './Dashboard.module.scss'
import Cards from '../../components/cards/Cards'
import useGetData from '../../hooks/useGetData'
import { useState } from 'react'

const Dashboard = () => {
  const { loading, error, tests } = useGetData()
  const [handleChange, setHandleChange] = useState<string>('')

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  const filteredData = tests.filter((data) =>
    data.name.toLowerCase().includes(handleChange.toLowerCase()),
  )

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Input setHandleChange={setHandleChange} />
      <Sort />
      <Cards tests={filteredData} />
    </div>
  )
}

export default Dashboard