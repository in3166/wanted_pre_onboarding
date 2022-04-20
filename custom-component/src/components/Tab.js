import React, { useState } from "react";
import styles from "./Tab.module.css";
import Input from "./Input";
import Toggle from "./Toggle";

const Tab = (props) => {
  const [value, setValue] = useState(1);
  const changeTabHandler = (value) => {
    setValue(value);
  };

  return (
    <div className={styles.tab}>
      <ul className={styles.tabMenu}>
        <li
          className={value === 1 ? `${styles.tabMenuActive}` : ""}
          onClick={() => changeTabHandler(1)}
        >
          Input
        </li>
        <li
          className={value === 2 ? `${styles.tabMenuActive}` : ""}
          onClick={() => changeTabHandler(2)}
        >
          Toggle
        </li>
      </ul>

      <div
        className={
          value === 1
            ? styles.tabContents
            : `${styles.tabContents} ${styles.tabContentsHidden}`
        }
      >
        <Input />
      </div>
      <div
        className={
          value === 2
            ? styles.tabContents
            : `${styles.tabContents} ${styles.tabContentsHidden}`
        }
      >
        <Toggle />
      </div>
    </div>
  );
};

export default Tab;
