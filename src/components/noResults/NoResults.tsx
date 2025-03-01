import React from 'react'
import { IPropsNoResults } from '../../types/props'
import Button from '../button/Button'
import styles from './NoResults.module.scss'

const NoResults: React.FC<IPropsNoResults> = ({ handleChangeReset }) => {
  return (
    <div className={styles.noResults}>
      <h2>Your search did not match any results.</h2>
      <div onClick={handleChangeReset}>
        <Button styles={'results'} />
      </div>
    </div>
  )
}

export default NoResults
