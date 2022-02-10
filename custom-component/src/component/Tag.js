import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tag.module.css";

const Tag = (props) => {
  const [Tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");

  const changeInputTagHandler = (e) => {
    setInputTag(e.target.value);
  };

  const enterInputTagHandler = (e) => {
      if (e.key === "Enter" && e.target.value !== "") {
        if (Tags.includes(e.target.value)) {
          alert("동일한 태그가 존재합니다.");
          return;
        }
      setTags((prev) => [...prev, e.target.value]);
      setInputTag("");
    }
  };

  const deleteTagHandler = (tag) => {
    setTags((prev) => prev.filter((v) => v !== tag));
  };
  return (
    <div className={styles.tagWrapper}>
      {Tags.map((v, k) => (
        <div key={v + k} className={styles.tagItem}>
          <label>{v}</label>
          <button onClick={() => deleteTagHandler(v)}>x</button>
        </div>
      ))}

      <div className={styles.tagInput}>
        <input
          type="text"
          onChange={changeInputTagHandler}
          onKeyPress={enterInputTagHandler}
          placeholder="Press enter to add tags"
          value={inputTag}
        />
      </div>
    </div>
  );
};

Tag.propTypes = {};

export default Tag;
