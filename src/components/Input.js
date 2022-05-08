import { useState } from 'react'
import styles from './Input.module.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { cx } from '../styles/index'

const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const emailValidator = (value) => REGEX_EMAIL.test(value)

function Input(props) {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ShowPassword, setShowPassword] = useState(false)

  const [BlurEmail, setBlurEmail] = useState(false)
  const [EmailTouched, setEmailTouched] = useState(false)

  const changeEmailHandler = (e) => {
    setEmail(e.currentTarget.value)
    setEmailTouched(true)
  }

  const changePasswordHandler = (e) => {
    setPassword(e.currentTarget.value)
  }

  const onBlurEmail = (e) => {
    if (emailValidator(e.currentTarget.value)) {
      setBlurEmail(true)
    } else {
      setBlurEmail(false)
    }
  }

  const changeVisiblePassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <form className={styles.form}>
      <div className={styles.formInputWrapper}>
        <label htmlFor='email'>E-mail</label>
        <div>
          <input
            type='email'
            id='email'
            onChange={changeEmailHandler}
            onBlur={onBlurEmail}
            placeholder='E-mail'
            value={Email}
          />
          <label htmlFor='email' className={cx(styles.check, { [styles.checkActive]: BlurEmail && EmailTouched })} />
        </div>
        {!BlurEmail && EmailTouched && (
          <label htmlFor='email' className={styles.error}>
            Invalid e-mail address.
          </label>
        )}
      </div>

      <div className={styles.formInputWrapper}>
        <label htmlFor='password'> Password</label>

        <input
          id='password'
          type={ShowPassword ? 'text' : 'password'}
          onChange={changePasswordHandler}
          placeholder='Password'
          value={Password}
        />

        <button type='button' className={styles.visibleIcon} onClick={changeVisiblePassword}>
          {!ShowPassword ? <AiOutlineEye size={22} /> : <AiOutlineEyeInvisible size={22} />}
        </button>
      </div>
    </form>
  )
}

export default Input
