import React, { useState } from "react";
import ModalContent from "./ModalContent"
import './styles.scss';
import { 
  buttonTransparent,
} from "../../styles/register.module.scss";

const Modal = ({content}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="login-modal">
      <button className={buttonTransparent} onClick={() => setModalIsOpen(!modalIsOpen)}>Login</button>
      {modalIsOpen ? 
      <ModalContent close={() => setModalIsOpen(!modalIsOpen)}>
        {content}
      </ModalContent> 
      : null}
    </div>
  );
};

export default Modal;
