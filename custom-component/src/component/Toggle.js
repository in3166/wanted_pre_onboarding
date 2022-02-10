import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = (props) => {
  const [value, setValue] = useState(false);

  const clickToggleHandler = () => {
    setValue((prev) => !prev);
  };

  return (
    <>
      <label className={styles.switch} >
        <input type="checkbox" value={value} onClick={clickToggleHandler}/>
        <span className={styles.slider}></span>
      </label>
      <div>
        {value && <p>Toggle Switch On</p>}
        {!value && <p>Toggle Switch Off</p>}
      </div>
    </>
  );
};

export default Toggle;
