import { useState } from 'react'
import styles from './Toggle.module.scss'
import {cx} from '../../../styles'

function Toggle() {

  const [isBtnChecked, setIsBtnChecked] = useState(false)

  const handleToggleChange = (e) => {
    setIsBtnChecked((prev) => !prev)
  }

  return (
    <div className={styles.toggleWrapper}>
      <input className={styles.checkBox}
        type="checkbox"
        onChange={handleToggleChange}
      />
      <div className={cx(styles.leftSide, {[styles.changeColor] : isBtnChecked})}>기본</div>
      <div className={cx(styles.rightSide, {[styles.changeColor] : isBtnChecked})}>상세</div>
    </div>
  )
}

export default Toggle

