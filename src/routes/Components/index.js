import { useState } from 'react'
import styles from './Components.module.scss'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Tab from './Tab/Tab'
import Toggle from './Toggle/Toggle'
import Slider from './Slider/Slider'
import Input from './Input/Input'
import Dropdown from './Dropdown/Dropdown'
import SwitchButton from './SwitchButton/SwitchButton'

function Components() {
  return (
    <div className={styles.componentsWrapper}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ 
            <>     
              <Toggle />
              <Tab />
              <Slider />
              <Input />
              <SwitchButton />
            </>
          } />
          <Route path='dropdown' element={ <Dropdown /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Components