import { useState } from 'react'
import styles from './Tab.module.scss'
import {cx} from '../../../styles'

function Tab() {
  const [activeIndex, setActiveIndex] = useState(0)

  const tabContArr=[
    {
      id: 0,
      tabTitle: "감자",
      tabCont:"🥔Potato"
    },
    {
      id: 1,
      tabTitle: "고구마",
      tabCont:"🍠Sweet Potato"
    },
    {
      id: 2,
      tabTitle: "카레라이스",
      tabCont:"🍛Curried Rice"
    }
  ]

  const handleTabClick = (e) => {
    setActiveIndex(e.currentTarget.value)
  }

  return (
    <div>
      <div className={styles.tabSetting}>

        <ul className={styles.tabList}>
          {tabContArr.map((section)=>{
            return(
              <button
                type='button'
                key={section.id}
                value={section.id}
                className={cx(styles.tabItem, {[styles.activeItem] : section.id === Number(activeIndex)})}
                onClick={handleTabClick}
              >
                {section.tabTitle}
              </button>
            )
          })}
          <div className={styles.clickSlideWrapper}>
            <div className={styles.clickSlide} style={{left: `${activeIndex * 33}%`}}/>
          </div>
        </ul>

        <div>
          { tabContArr[activeIndex].tabCont }
        </div>

      </div>
    </div>
  )
}

export default Tab

