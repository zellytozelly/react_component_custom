import { useState } from 'react'
import styles from './SwitchButton.module.scss'
import { useNavigate } from 'react-router-dom'

function SwitchButton() {
  const navigate = useNavigate()
  const handlePageClick = () => {
    navigate('dropdown')
  }
  return(

    <button 
      type='button' 
      className={styles.dropdownButton} 
      onClick={handlePageClick}
    >
      Go to Dropdown
    </button>
        

  )
}

export default SwitchButton
