import React, { useState } from "react";
import styles from "./AutoComplete.module.css";

const AutoComplete = (props) => {
  const [text, setText] = useState("");
  const [Reacommends, setReacommends] = useState([
    "refurbished",
    " antique",
    "banana",
    "a1",
  ]);

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  const resetTextHandler = () => {
    setText("");
  };

  const enterTextHandler = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
      const existed = Reacommends.some((value) => value === e.target.value);
      if (existed) return;
      setReacommends((prev) => [...prev, e.target.value]);
    }
  };

  const clickRecommendHandler = (value) => {
    setText(value);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrap}>
        <input
          type="text"
          value={text}
          onChange={changeTextHandler}
          onKeyPress={enterTextHandler}
          placeholder="검색어 입력 후 엔터를 누르세요."
        />
        <div className={styles.cancel} onClick={resetTextHandler}>
          x
        </div>
      </div>
      {Reacommends.filter((recommed) => text !== "" && recommed.includes(text))
        .length > 0 && (
        <div className={styles.recommend}>
          <ul>
            {Reacommends.filter(
              (recommed) => text !== "" && recommed.includes(text)
            ).map((v) => (
              <li onClick={() => clickRecommendHandler(v)}>{v}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
