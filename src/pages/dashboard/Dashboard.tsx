import { useState } from 'react'
import Cards from '../../components/cards/Cards'
import Input from '../../components/input/Input'
import NoResults from '../../components/noResults/NoResults'
import Sort from '../../components/sort/Sort'
import useGetData from '../../hooks/api/useGetData'
import useFilter from '../../hooks/core/useFilter'
import useSort from '../../hooks/core/useSort'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  const { loading, error, tests } = useGetData()
  const [handleChange, setHandleChange] = useState('')
  const { filteredData } = useFilter({ handleChange, tests })
  const { sortedData, setSortByField, sortField, sortOrder } = useSort({
    filteredData,
  })

  console.log('dashboard')
  const handleChangeReset = () => {
    setHandleChange('')
  }

  if (loading) {
    return <div className={styles.container}>Loading...</div>
  }

  if (error) {
    return <div className={styles.container}>{error}</div>
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
          <Sort
            setSortByField={setSortByField}
            sortField={sortField}
            sortOrder={sortOrder}
          />
          <Cards tests={sortedData} />
        </>
      ) : (
        <NoResults handleChangeReset={handleChangeReset} />
      )}
    </div>
  )
}

export default Dashboard
