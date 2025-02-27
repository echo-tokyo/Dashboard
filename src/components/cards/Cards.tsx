import { Test } from '../../types/api'
import Card from './card/Card'
import styles from './Cards.module.scss'


const Cards = ({tests}: {tests: Test[]}) => {
  console.log(tests)
  return (
    <div className={styles.cards}>
      {tests.map(test => 
        <Card test={test} key={test.id}/>
      )}
    </div>
  )
}

export default Cards