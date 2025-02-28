import Input from '../../components/input/Input'
import Sort from '../../components/sort/Sort'
import styles from './Dashboard.module.scss'
import Cards from '../../components/cards/Cards'
import useGetData from '../../hooks/useGetData'
import { useState } from 'react'
import NoResults from '../../components/noResults/NoResults'

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

  const handleChangeReset = () => {
    setHandleChange('')
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Input setHandleChange={setHandleChange} handleChange={handleChange} />
      {filteredData.length !== 0 ? (
        <>
          <Sort />
          <Cards tests={filteredData} />
        </>
      ) : (
        <NoResults handleChangeReset={handleChangeReset} />
      )}
    </div>
  )
}

export default Dashboard
