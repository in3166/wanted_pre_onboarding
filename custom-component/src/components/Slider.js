import React, { useState } from "react";
import styles from "./Slider.module.css";

const steps = [1, 25, 50, 75, 100];

const Slider = () => {
  const [Num, setNum] = useState(1);
  const [ProgressLine, setProgressLine] = useState({});

  const changeRangeHandler = (e) => {
    e.preventDefault();
    setNum(e.target.value);
    setProgressLine({ width: `${e.target.value}%` });
  };

  const setStepsHanlder = (value) => {
    setNum(value);
    setProgressLine({ width: `${value}%` });
  };
  return (
    <div className={styles.wrapper}>
      <label>{Num} %</label>

      <div>
        <input
          type="range"
          onChange={(e) => changeRangeHandler(e)}
          min={1}
          max={100}
          value={Num}
          className={styles.bar}
          id="range"
        />

        <ul className={styles.slots}>
          {steps.map((value) => (
            <li className={Num >= value && `${styles.activeSlot}`}></li>
          ))}
        </ul>
        <div className={styles.progress} style={ProgressLine}></div>
      </div>

      <ul className={styles.steps}>
        {steps.map((value) => (
          <li onClick={() => setStepsHanlder(value)}>{value} %</li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
