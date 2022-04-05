import React, { FunctionComponent } from "react";

const Caller: FunctionComponent<any> = ({ props }) => {
  return (
    <div>
      <span>Nome:{props.name ? props.name : ""}</span>
      <span>CPF:{props.cpf ? props.cpf : ""}</span>
      <span>RG:{props.rg ? props.rg : ""}</span>
      <span>Data Nasc:{props.birthDate ? props.birthDate : ""}</span>
      <span>Cep:{props.cep ? props.cep : ""}</span>
      <span>Rua:{props.street ? props.street : ""}</span>
      <span>Número:{props.number ? props.number : ""}</span>
      <span>Bairro:{props.district ? props.distric : ""}</span>
      <span>E-mail:{props.email ? props.email : ""}</span>
    </div>
  );
};

export default Caller;
