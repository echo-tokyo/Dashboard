import axios from 'axios'
import { useEffect, useState } from 'react'
import { Test } from '../../types/api'

const useGetData = () => {
  const [tests, setTests] = useState<Test[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3100/tests')
        const testsData = response.data

        const promises = testsData.map(async (test: Test) => {
          const siteResponse = await axios.get(
            `http://localhost:3100/sites/${test.siteId}`,
          )
          return { ...test, siteName: siteResponse.data.url }
        })

        const enrichedTests = await Promise.all(promises)
        setTests(enrichedTests)
      } catch (err) {
        setError('Ошибка при получении данных')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { tests, loading, error }
}

export default useGetData
