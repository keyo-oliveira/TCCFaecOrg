import Login from "../Login";
import Modal from "../Modal";
import React from "react";
import "./styles.scss";

const UserNotFound = () => {
  return (
    <div className="user-not-found__container">
      <div className="user-not-found__wrapper">
        <span className="user-not-found__text"> Faça login para continuar</span>
        <Modal buttonText={"login"} content={<Login />} />
      </div>
    </div>
  );
};

export default UserNotFound;
