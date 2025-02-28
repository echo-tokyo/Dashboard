import React from 'react'
import Button from '../button/Button'
import { INoResultsProps } from '../../types/props'
import styles from './NoResults.module.scss'

const NoResults: React.FC<INoResultsProps> = ({ handleChangeReset }) => {
  return (
    <div className={styles.noResults}>
      <h2>Your search did not match any results.</h2>
      <div onClick={handleChangeReset}>
        <Button />
      </div>
    </div>
  )
}

export default NoResults
