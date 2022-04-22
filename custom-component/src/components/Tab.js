import React, { useState } from "react";
import styles from "./Tab.module.css";
import Input from "./Input";
import Toggle from "./Toggle";
import Dropdown from "./Dropdown";
import Slider from "./Slider";

const Tab = (props) => {
  const [value, setValue] = useState(0);
  const [SlideStyle, setSlideStyle] = useState({});

  const changeTabHandler = (value) => {
    setValue(value);
    setSlideStyle({
      left: `${25 * value}%`,
    });
  };

  return (
    <div className={styles.wrapper}>
      <header>Tab Menu</header>
      <hr />
      <ul className={styles.tabMenu}>
        <li
          className={value === 0 ? `${styles.tabMenuActive}` : ""}
          onClick={() => changeTabHandler(0)}
        >
          Toggle
        </li>
        <li
          className={value === 1 ? `${styles.tabMenuActive}` : ""}
          onClick={() => changeTabHandler(1)}
        >
          Slider
        </li>
        <li
          className={value === 2 ? `${styles.tabMenuActive}` : ""}
          onClick={() => changeTabHandler(2)}
        >
          Input
        </li>
        <li
          className={value === 3 ? `${styles.tabMenuActive}` : ""}
          onClick={() => changeTabHandler(3)}
        >
          Dropdwon
        </li>
      </ul>

      <div className={styles.slider}>
        <div className={styles.indicator} style={SlideStyle}></div>
      </div>

      <div
        className={
          value === 0
            ? styles.tabContents
            : `${styles.tabContents} ${styles.tabContentsHidden}`
        }
      >
        <Toggle />
      </div>
      <div
        className={
          value === 1
            ? styles.tabContents
            : `${styles.tabContents} ${styles.tabContentsHidden}`
        }
      >
        <Slider />
      </div>
      <div
        className={
          value === 2
            ? styles.tabContents
            : `${styles.tabContents} ${styles.tabContentsHidden}`
        }
      >
        <Input />
      </div>
      <div
        className={
          value === 3
            ? styles.tabContents
            : `${styles.tabContents} ${styles.tabContentsHidden}`
        }
      >
        <Dropdown />
      </div>
    </div>
  );
};

export default Tab;
