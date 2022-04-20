import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = (props) => {
  const [value, setValue] = useState(false);

  const clickToggleHandler = () => {
    setValue((prev) => !prev);
  };

  return (
    <>
      <label className={styles.switch}>
        <label
          className={
            !value
              ? `${styles.textActive} ${styles.textLeft}`
              : styles.textLeft
          }
        >
          기본
        </label>
        <label
          className={
            value
              ? `${styles.textActive} ${styles.textRight}`
              : styles.textRight
          }
        >
          상세
        </label>
        <input type="checkbox" value={value} onClick={clickToggleHandler} />
        <span className={styles.slider}></span>
      </label>
      <div></div>
    </>
  );
};

export default Toggle;
