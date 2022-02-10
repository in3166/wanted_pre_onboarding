import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
          <label>Open Modal</label>
        <button onClick={props.onClose}>x</button>
      </header>
      <div className={styles.content}>
        <p>HELLO!</p>
      </div>
    </div>
  );
};

const ModalPopup = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

const Modal = (props) => {
  const [open, setOpen] = useState(false);
  const modalOpenHandler = () => {
    setOpen(true);
  };
  const modalCloseHandler = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={styles.button} onClick={modalOpenHandler}>
        Open Modal
      </button>
      {open && <ModalPopup onClose={modalCloseHandler} />}
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
