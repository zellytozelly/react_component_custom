import { useState } from 'react'
import styles from './Slider.module.scss'
import {cx} from '../../../styles'

function Tab() {
  const [sliderValue, setSliderValue] = useState(0)
  const splitValues = [1, 25, 50, 75, 100]

  const handleInputValue = (e) =>{
    setSliderValue(e.currentTarget.value)
  }

  return (
    <div className={styles.sliderWrapper}>

      <div className={styles.textBox}> 
        <span className={styles.text}>{sliderValue}</span> %
      </div>

      <div className={styles.mainSlider}>
        <input
          type='range'
          min='0' 
          max='100'
          step='1'
          className={styles.sliderInput}
          value={sliderValue}
          style={{background: `linear-gradient(90deg, colors.$GREEN_MINT 0%, colors.$GREEN_MINT ${sliderValue}%, colors.$GREY_BACKGROUND ${sliderValue}%)`}}
          onChange={handleInputValue} 
        />
        {splitValues.map((posValue)=>{
          return(
            <div key={posValue}>
              <div 
                className={styles.circle}
                style={{left: `${posValue}%`}}
              /> 
              <button 
                type='button'
                className={styles.rangeButton}
                style={{left: `calc(${posValue}% - 1.2rem)`}}
                value={posValue}
                onClick={handleInputValue}
              >{posValue}%</button>
            </div>
          )
        })} 
      </div>

    </div>
  )
}

export default Tab
