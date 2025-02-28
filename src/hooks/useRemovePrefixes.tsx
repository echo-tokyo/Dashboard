import { Test } from '../types/api'

const useRemovePrefixes = (test: Test) => {
  function removePrefixes(url:string):string {
    return url.replace(/^(https?:\/\/)?(www\.)?/, '')
  }

  const cleanedUrl = removePrefixes(test.siteName)

  return {cleanedUrl}
}

export default useRemovePrefixes