import React, { useState } from "react";
import styles from "./Slider.module.css";

const STEPS = [1, 25, 50, 75, 100];

const Slider = () => {
  const [Number, setNumber] = useState(1);

  const changeRangeHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const setStepsHanlder = (value) => {
    setNumber(value);
  };

  return (
    <div className={styles.wrapper}>
      <label>{Number} %</label>

      <div>
        <input
          type="range"
          onChange={(e) => changeRangeHandler(e)}
          min={1}
          max={100}
          step={1}
          value={Number}
          className={styles.bar}
          id="range"
        />

        <meter min="0" max="100" className={styles.meterBar} value={Number} />

        <ul className={styles.slots}>
          {STEPS.map((value) => (
            <li
              key={value}
              className={Number >= value ? `${styles.activeSlot}` : ""}
            ></li>
          ))}
        </ul>
      </div>

      <ul className={styles.steps}>
        {STEPS.map((value) => (
          <li key={value} onClick={() => setStepsHanlder(value)}>
            {value} %
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
