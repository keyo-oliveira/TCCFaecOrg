import React, { useState } from "react";
import ModalContent from "./ModalContent";
import "./styles.scss";

const Modal = ({ content, buttonText }: any) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="login-modal">
      <button
        className="modal__open-button"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        {buttonText}
      </button>
      {modalIsOpen ? (
        <ModalContent close={() => setModalIsOpen(!modalIsOpen)}>
          {content}
        </ModalContent>
      ) : null}
    </div>
  );
};

export default Modal;
