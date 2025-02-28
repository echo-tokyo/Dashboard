import React from 'react'
import Button from '../button/Button'
import styles from './NoResults.module.scss'
import { IPropsNoResults } from '../../types/props'

const NoResults: React.FC<IPropsNoResults> = ({ handleChangeReset }) => {
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
