import { useState } from 'react'
import styles from './Input.module.scss'
import { CheckCircleIcon, EyeOpenIcon, EyeHideIcon } from '../../../assets/svgs'
import {cx} from '../../../styles'

function Input() {

  const [pwd, setPwd] = useState('')
  const [isRevealPwd, setIsRevealPwd] = useState(false)
  const [isEmailReg, setIsEmailReg] = useState(false)
  const [isEmailEmpty, setIsEmailEmpty] = useState(true)

  const checkEmail = (e) => {
      const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (emailRegExp.test(e.currentTarget.value)) setIsEmailReg(true); else setIsEmailReg(false)
      if (e.currentTarget.value) setIsEmailEmpty(false); else setIsEmailEmpty(true)
  }

  const handlePwdChange = (e) => {
    setPwd(e.currentTarget.value)
  }

  const handleEyeToggleClick = (e) => {
    setIsRevealPwd(prevState => !prevState)
  }

  return (
    <div className={styles.loginWrapper}>
      
      <div className={styles.emailBox}>
        <div className={styles.label}>E-mail</div>
        <input type='text' placeholder='E-mail' className={styles.inputText} onChange={checkEmail} />
        <div className={cx(styles.checkToggle, {[styles.changeMintColor] : isEmailReg})}><CheckCircleIcon/></div>
        <div className={cx(styles.emailValidText, {[styles.visible] : !isEmailReg && !isEmailEmpty})} >Invalid e-mail address.</div>
      </div>
    
      <div className={styles.passwordBox}>
        <div className={styles.label}>Password </div>
        <input 
          type={isRevealPwd ? 'text' : 'password'} 
          value={pwd} 
          className={styles.inputText} 
          onChange={handlePwdChange} 
          placeholder='Password'
        />
        <div className={cx(styles.buttonWrapper, {[styles.changeMintColor] : isRevealPwd})}>    
          <input
            type='button'
            className={styles.eyeToggleInput}
            onClick={handleEyeToggleClick}
            aria-label='Eye Toggle button'
          />
          <div className={styles.eyeToggleIcon}>{isRevealPwd ? <EyeOpenIcon/> : <EyeHideIcon/>}</div>
        </div>
      </div> 

    </div>
  )
}

export default Input