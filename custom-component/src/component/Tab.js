import React, { useState } from "react";
import styles from "./Tab.module.css";
import AutoComplete from "./AutoComplete";
import ClickToEdit from "./ClickToEdit";
import Tag from "./Tag";
import Modal from "./Modal";
import Toggle from "./Toggle";

const Tab = (props) => {
  const [value, setValue] = useState(0);
  const changeTabHandler = (value) => {
    setValue(value);
  };

  return (
    <div>
      <div>
        <header className={styles.tabHeader}>
          <h3>Tab</h3>
        </header>
        <ul className={styles.tabMenu}>
          <li
            className={value === 0 ? `${styles.tabMenuActive}` : ""}
            onClick={() => changeTabHandler(0)}
          >
            AutoComplete
          </li>
          <li
            className={value === 1 ? `${styles.tabMenuActive}` : ""}
            onClick={() => changeTabHandler(1)}
          >
            ClickToEdit
          </li>
          <li
            className={value === 2 ? `${styles.tabMenuActive}` : ""}
            onClick={() => changeTabHandler(2)}
          >
            Modal
          </li>
          <li
            className={value === 3 ? `${styles.tabMenuActive}` : ""}
            onClick={() => changeTabHandler(3)}
          >
            Tag
          </li>
          <li
            className={value === 4 ? `${styles.tabMenuActive}` : ""}
            onClick={() => changeTabHandler(4)}
          >
            Toggle
          </li>
        </ul>
        <div
          className={
            value === 0
              ? styles.tabContents
              : `${styles.tabContents} ${styles.tabContentsHidden}`
          }
        >
          <AutoComplete />
        </div>
        <div
          className={
            value === 1
              ? styles.tabContents
              : `${styles.tabContents} ${styles.tabContentsHidden}`
          }
        >
          <ClickToEdit />
        </div>
        <div
          className={
            value === 2
              ? styles.tabContents
              : `${styles.tabContents} ${styles.tabContentsHidden}`
          }
        >
          <Modal />
        </div>
        <div
          className={
            value === 3
              ? styles.tabContents
              : `${styles.tabContents} ${styles.tabContentsHidden}`
          }
        >
          <Tag />
        </div>
      </div>
      <div
        className={
          value === 4
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
