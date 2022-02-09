import Login from "../Login";
import Modal from '../Modal'
import React from "react";


const UserNotFound = () => {
  return (
    <div>
      <span> Faça login para continuar</span>
      <Modal buttonText={"login"} content={<Login />} />
    </div>
  );
};

export default UserNotFound;
