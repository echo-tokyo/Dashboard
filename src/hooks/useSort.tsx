import { useState } from 'react'
import { UsePropsFilter } from '../types/props'

const useSort = ({ filteredData }: UsePropsFilter) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null)

  const sortedData = [...filteredData].sort((a, b) => {
     if(sortOrder === 'asc'){
      return a.name.localeCompare(b.name)
    } else if (sortOrder === 'desc'){
      return b.name.localeCompare(a.name)
    } else{
      return 0
    }
  })

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  return { sortedData, toggleSortOrder, sortOrder }
}

export default useSort
