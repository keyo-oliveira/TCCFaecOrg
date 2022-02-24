import React, { useState } from "react";
import ModalContent from "./ModalContent.jsx";
import "./styles.scss";

const Modal = ({ content, buttonText }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="login-modal">
      <button className="modal__open-button" onClick={() => setModalIsOpen(!modalIsOpen)}>{buttonText}</button>
      {modalIsOpen ? (
        <ModalContent close={() => setModalIsOpen(!modalIsOpen)}>
          {content}
        </ModalContent>
      ) : null}
    </div>
  );
};

export default Modal;
