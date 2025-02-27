import { useState } from 'react'

const useRandomColor = () => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`
  }

  const [color] = useState(randomColor())

  return { color }
}

export default useRandomColor
