import React, { useState } from "react";
import styles from "./Input.module.css";

const regEmail =
  /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const emailValidator = (value) => regEmail.test(value);

const Input = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);

  const [BlurEmail, setBlurEmail] = useState(false);
  const [EmailTouched, setEmailTouched] = useState(false);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
    setEmailTouched(true);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onBlurEmail = (e) => {
    if (emailValidator(e.target.value)) {
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
            {!ShowPassword ? (
              <i className="fa fa-eye icon fa-lg"></i>
            ) : (
              <i className="fa fa-eye-slash icon fa-lg"></i>
            )}
          </label>
        </div>
      </form>
    </>
  );
};

export default Input;
