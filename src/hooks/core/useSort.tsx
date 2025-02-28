import { useState } from 'react'
import { UsePropsFilter } from '../../types/props'

const useSort = ({ filteredData }: UsePropsFilter) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
  const [sortField, setSortField] = useState<'name' | 'type' | 'siteName' | 'status'>(
    'name',
  )

  const statusOrder = {
    asc: ['ONLINE', 'PAUSED', 'STOPPED', 'DRAFT'],
    desc: ['DRAFT', 'STOPPED', 'PAUSED', 'ONLINE'],
  }

  const sortedData = filteredData.sort((a, b) => {
    if (sortField === 'status') {
      const aIndex = statusOrder[sortOrder || 'asc'].indexOf(a.status);
      const bIndex = statusOrder[sortOrder || 'asc'].indexOf(b.status);
      return aIndex - bIndex;
    } else {
      if (sortOrder === 'asc') {
        return a[sortField].localeCompare(b[sortField]);
      } else if (sortOrder === 'desc') {
        return b[sortField].localeCompare(a[sortField]);
      } else {
        return 0;
      }
    }
  })

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  const setSortByField = (field: 'name' | 'type' | 'siteName' | 'status') => {
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