import React, { FunctionComponent } from "react";

const Caller: FunctionComponent<any> = ({ props }) => {

  console.log(props)
  return (
    <div className="caller__container">
      <div className="caller_info">
        Nome:<span>{props.name}</span>
      </div>
      <div className="caller_info">
        CPF:
        <span>{props.cpf ? props.cpf : ""}</span>
      </div>
      <div>
        RG:
        <span>{props.rg ? props.rg : ""}</span>
      </div>
      <div className="caller_info">
        Data Nasc:
        <span>{props.birthDate ? props.birthDate : ""}</span>
      </div>
      <div className="caller_info">
        Cep:
        <span>{props.cep ? props.cep : ""}</span>
      </div>
      <div className="caller_info">
        Rua:
        <span>{props.street ? props.street : ""}</span>
      </div>
      <div className="caller_info">
        Número:
        <span>{props.number ? props.number : ""}</span>
      </div>
      <div className="caller_info">
        Bairro:
        <span>{props.district ? props.district : ""}</span>
      </div>
      <div className="caller_info">
        E-mail:
        <span>{props.email ? props.email : ""}</span>
      </div>
    </div>
  );
};

export default Caller;
