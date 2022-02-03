import React from "react";
import "./styles.scss";

const ModalContent = ({ children, close }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <button className="modal__close" onClick={close}>
            X
          </button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalContent;
