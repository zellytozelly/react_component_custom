import { useState } from 'react'
import styles from './Dropdown.module.scss'
import { SearchIcon } from '../../../assets/svgs'
import {cx} from '../../../styles'

function Dropdown() {
  const textOptions = [
    "All",
    "The A",
    "The B",
    "The C",
    "This A",
    "This B",
    "This C"
  ]
  const [searchItem, setSearchItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState('All')

  const handleDropdownClick = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const handleDropdownChange = (e) => {
    setSearchItem(e.currentTarget.value)
  }

  const handleOneItemClick = (e) => {
    setItem(e.currentTarget.value)
    setIsOpen(false)
  }

  return (
    <div className={styles.dropdownWrapper}>
      <button 
        type='button' 
        className={styles.dropdownBox}
        onClick={handleDropdownClick}
      >
        {item}
        <div className={styles.arrow}>▼</div>
      </button>
      
      {isOpen ?  
        <div className={styles.selectWrapper}>
          <div className={styles.iconPosition}><SearchIcon/></div>
          <input className={styles.selectInput}
            type="text"
            placeholder="Search Symbol"
            onChange={handleDropdownChange}
          /><hr/>
                  
          {textOptions.filter((data) => 
            (searchItem === '') || (data.toLowerCase().includes(searchItem.toLowerCase()))
          ).map(data => {
              return (
                <button 
                  type='button'
                  key={data} 
                  className={styles.selectOptions}
                  value={data}
                  onClick={handleOneItemClick}
                >
                  {data}
                </button>
              )
          })}
                  
        </div>
      :''}
    
    </div>
  )
}

export default Dropdown

