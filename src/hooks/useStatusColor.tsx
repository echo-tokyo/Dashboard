const useStatusColor = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'PAUSED':
        return '#FF8346'
      case 'DRAFT':
        return '#5C5C5C'
      case 'STOPPED':
        return '#FE4848'
      case 'ONLINE':
        return '#1BDA9D'
      default:
        return '#000000'
    }
  }

  return { statusColor }
}

export default useStatusColor
