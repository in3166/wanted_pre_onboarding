import React, { useState } from 'react'
import styles from './Toggle.module.scss'
import { cx } from '../styles/index'

function Toggle(props) {
  const [value, setValue] = useState(false)

  const clickToggleHandler = () => {
    setValue((prev) => !prev)
  }

  return (
    <label className={styles.switch}>
      <input type='checkbox' checked={value} id='toggleSwitch' onChange={clickToggleHandler} />
      <span className={styles.slider} />
      <label className={cx(styles.textLeft, styles.text, { [styles.textActive]: !value })} htmlFor='toggleSwitch'>
        기본
      </label>
      <label className={cx(styles.textRight, styles.text, { [styles.textActive]: value })} htmlFor='toggleSwitch'>
        상세
      </label>
    </label>
  )
}

export default Toggle
