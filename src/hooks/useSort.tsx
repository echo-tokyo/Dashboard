import { useState } from 'react'
import { UsePropsFilter } from '../types/props'

const useSort = ({ filteredData }: UsePropsFilter) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
  const [sortField, setSortField] = useState<'name' | 'type' | 'siteName'>('name')
  
  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortField].localeCompare(b[sortField])
    } else if (sortOrder === 'desc') {
      return b[sortField].localeCompare(a[sortField])
    } else {
      return 0
    }
  })

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  const setSortByField = (field: 'name' | 'type' | 'siteName') => {
    if (field === sortField) {
      toggleSortOrder()
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  return { sortedData, setSortByField }
}

export default useSort