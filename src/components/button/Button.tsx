import { IPropsButton } from '../../types/props'
import './Button.modules.scss'

const Button = ({ styles }: IPropsButton) => {
  return <button className={styles}>{styles}</button>
}

export default Button
