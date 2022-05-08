import { useState } from 'react'
import styles from './Slider.module.scss'

const STEPS = [1, 25, 50, 75, 100]

function Slider() {
  const [Number, setNumber] = useState(1)

  const changeRangeHandler = (e) => {
    setNumber(e.currentTarget.value)
  }

  const setStepsHanlder = (value) => {
    setNumber(value)
  }

  return (
    <div className={styles.container}>
      <label>{Number} %</label>

      <div className={styles.sliderWrapper}>
        <input
          type='range'
          onChange={(e) => changeRangeHandler(e)}
          min={1}
          max={100}
          step={1}
          value={Number}
          className={styles.bar}
          id='range'
        />

        <meter min='0' max='100' className={styles.meterBar} value={Number} />

        <ul className={styles.slots}>
          {STEPS.map((value) => (
            <li key={value} className={Number >= value ? `${styles.activeSlot}` : ''} />
          ))}
        </ul>
      </div>

      <ul className={styles.steps}>
        {STEPS.map((value, index) => (
          <li key={`steps-${index + 1}`}>
            <button type='button' onClick={() => setStepsHanlder(value)}>
              {value} %
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Slider
