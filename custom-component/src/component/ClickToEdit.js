import React, { useState } from "react";
import styles from "./ClickToEdit.module.css";

const ClickToEdit = (props) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");

  const [BlurName, setBlurName] = useState("");
  const [BlurAge, setBlurAge] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const onBlurName = (e) => {
    setBlurName(e.target.value);
  };

  const onBlurAge = (e) => {
    setBlurAge(e.target.value);
  };

  return (
    <>
      <form className={styles.form}>
        <div>
          <label>이름</label>
          <input
            type="text"
            onChange={changeNameHandler}
            onBlur={onBlurName}
            value={Name}
          />
        </div>
        <div>
          <label>나이</label>
          <input
            type="text"
            onChange={changeAgeHandler}
            onBlur={onBlurAge}
            value={Age}
          />
        </div>
      </form>
      <div>
        이름 {BlurName} 나이 {BlurAge}
      </div>
    </>
  );
};

export default ClickToEdit;
