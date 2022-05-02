import React, { useState } from "react";
import styles from "./Input.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailValidator = (value) => REGEX_EMAIL.test(value);

const Input = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);

  const [BlurEmail, setBlurEmail] = useState(false);
  const [EmailTouched, setEmailTouched] = useState(false);

  const changeEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
    setEmailTouched(true);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onBlurEmail = (e) => {
    if (emailValidator(e.currentTarget.value)) {
      setBlurEmail(true);
    } else {
      setBlurEmail(false);
    }
  };

  const changeVisiblePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.formInput}>
          <label>E-mail</label>
          <div>
            <input
              type="email"
              onChange={changeEmailHandler}
              onBlur={onBlurEmail}
              placeholder="E-mail"
              value={Email}
            />
            <label
              className={
                BlurEmail && EmailTouched
                  ? `${styles.check} ${styles.checkActive}`
                  : `${styles.check} `
              }
            ></label>
          </div>
          {!BlurEmail && EmailTouched && (
            <label className={styles.error}>Invalid e-mail address.</label>
          )}
        </div>

        <div className={styles.formInput}>
          <label>Password</label>

          <input
            type={ShowPassword ? "text" : "password"}
            onChange={changePasswordHandler}
            placeholder="Password"
            value={Password}
          />
          <label className={styles.visibleText} onClick={changeVisiblePassword}>
            {!ShowPassword ? <AiOutlineEye size={22} /> : <AiOutlineEyeInvisible size={22}/>}
          </label>
        </div>
      </form>
    </>
  );
};

export default Input;
