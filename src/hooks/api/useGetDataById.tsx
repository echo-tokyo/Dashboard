import axios from 'axios'
import { useEffect, useState } from 'react'
import { Test } from '../../types/api'

const useGetDataById = (id: string | undefined ) => {
  const [data, setData] = useState<Test | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) 
        const res = await axios.get(`http://localhost:3100/tests/${id}`)
        setData(res.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}

export default useGetDataById
