import Input from '../../components/input/Input'
import Sort from '../../components/sort/Sort'
import styles from './Dashboard.module.scss'
import Cards from '../../components/cards/Cards'
import useGetData from '../../hooks/useGetData'
import { useState } from 'react'
import NoResults from '../../components/noResults/NoResults'
import useSort from '../../hooks/useSort'
import useFilter from '../../hooks/useFilter'

const Dashboard = () => {
  const { loading, error, tests } = useGetData()
  const [handleChange, setHandleChange] = useState<string>('')
  const { filteredData } = useFilter({ handleChange, tests })
  const { sortedData, toggleSortOrder } = useSort({ filteredData })

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  const handleChangeReset = () => {
    setHandleChange('')
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Input
        setHandleChange={setHandleChange}
        handleChange={handleChange}
        testsCount={sortedData.length}
      />
      {sortedData.length !== 0 ? (
        <>
          <Sort toggleSortOrder={toggleSortOrder} sortedData={sortedData} />
          <Cards tests={sortedData} />
        </>
      ) : (
        <NoResults handleChangeReset={handleChangeReset} />
      )}
    </div>
  )
}

export default Dashboard
