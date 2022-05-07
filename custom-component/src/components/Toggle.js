import React, { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle(props) {
  const [value, setValue] = useState(false)

  const clickToggleHandler = () => {
    setValue((prev) => !prev)
  }

  return (
    <label className={styles.switch}>
      <input type='checkbox' checked={value} id='toggleSwitch' onChange={clickToggleHandler} />
      <span className={styles.slider} />
      <label
        className={
          !value ? `${styles.textActive} ${styles.textLeft} ${styles.text}` : `${styles.textLeft} ${styles.text}`
        }
        htmlFor='toggleSwitch'
      >
        기본
      </label>
      <label
        className={
          value ? `${styles.textActive} ${styles.text} ${styles.textRight}` : `${styles.textRight} ${styles.text}`
        }
        htmlFor='toggleSwitch'
      >
        상세
      </label>
    </label>
  )
}

export default Toggle
