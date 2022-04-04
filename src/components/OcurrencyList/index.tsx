import classNames from "classnames";
import { Link } from "gatsby";
import React, { FunctionComponent, useState } from "react";
import Caller from "./Caller";

interface OcurrencyOpen {
  ocurrency: Ocurrency;
}

const OcurrencyList: FunctionComponent<OcurrencyOpen> = ({ ocurrency }) => {
  const [isCallerOpen, setCallerOpen] = useState(false);

  return (
    <div className="ocurrency__container-page">
      <div
        className={classNames(
          "ocurrency__card gradient",
          ocurrency.urgency === "urgent" && "urgent",
          ocurrency.urgency === "high" && "high",
          ocurrency.answeredBy != "" || (null && "answered")
        )}
        key={ocurrency.ocurrencyId}
      >
        <div className="ocurrency__title">
          <span>{ocurrency.ocurrencyId + " " + ocurrency.urgency}</span>
        </div>
        <ul className="ocurrency_list">
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Tipo de ocorrência: </span>
            <span>{ocurrency.ocurrencyType}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Numeros de envolvidos: </span>
            <span>{ocurrency.manyEnvolved}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Numero de vitimas: </span>
            <span>{ocurrency.victims}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Data de geração: </span>
            <span>{ocurrency.generationDate}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Latitude: </span>
            <span>{ocurrency.latitude}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Longitude: </span>
            <span>{ocurrency.longitude}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Cidade: </span>
            <span>{ocurrency.city}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Estado: </span>
            <span>{ocurrency.state}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Rua: </span>
            <span>{ocurrency.address}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Número: </span>
            <span>{ocurrency.number}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Bairro: </span>
            <span>{ocurrency.neighborhood}</span>
          </li>
          <li className="ocurrency_list-item">
            <span className="ocurrency_item-type">Complemento: </span>
            <span>{ocurrency.complement}</span>
          </li>
        </ul>
        <div className="details-container">
          <strong>Detalhes: </strong>
          <span>
            <p>{ocurrency.details}</p>
          </span>
        </div>
      </div>
      <button onClick={() => setCallerOpen(!isCallerOpen)}>
        {" "}
        Chamador da ocorrência{" "}
      </button>
      {isCallerOpen ? <Caller props={ocurrency.caller} /> : null}

      <Link className="ocurrency_back-button" to="/ocurrencys">
        Voltar
      </Link>
    </div>
  );
};

export default OcurrencyList;
