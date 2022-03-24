import classNames from "classnames";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";

interface OcurrencyOpen {
  ocurrency: Ocurrency[];
  OcurrencyFilterId: number;
}

const OcurrencyList: FunctionComponent<OcurrencyOpen> = ({ ocurrency }) => {
  return (
    <div className="ocurrency__container">
      {ocurrency.map((props: Ocurrency) => {
        return (
          <div
            className={classNames(
              "ocurrency__card gradient",
              props.urgency === "urgent" && "urgent",
              props.urgency === "high" && "high",
              props.answeredBy != "" && "answered"
            )}
            key={props.ocurrencyId}
          >
            <div className="ocurrency__title">
              <span>{props.ocurrencyId + " " + props.urgency}</span>
            </div>
            <ul className="ocurrency_list">
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">
                  Tipo de ocorrência:{" "}
                </span>
                <span>{props.ocurrencyType}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">
                  Numeros de envolvidos:{" "}
                </span>
                <span>{props.manyEnvolved}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Numero de vitimas: </span>
                <span>{props.victims}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Data de geração: </span>
                <span>{props.generationDate}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Latitude: </span>
                <span>{props.latitude}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Longitude: </span>
                <span>{props.longitude}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Cidade: </span>
                <span>{props.city}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Estado: </span>
                <span>{props.state}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Rua: </span>
                <span>{props.address}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Número: </span>
                <span>{props.number}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Bairro: </span>
                <span>{props.neighborhood}</span>
              </li>
              <li className="ocurrency_list-item">
                <span className="ocurrency_item-type">Complemento: </span>
                <span>{props.complement}</span>
              </li>
            </ul>
            <div className="details-container">
              <strong>Detalhes: </strong>
              <span>
                <p>{props.details}</p>
              </span>
            </div>
          </div>
        );
      })}
      <Link className="ocurrency_back-button" to="/ocurrencys">
        Voltar
      </Link>
    </div>
  );
};

export default OcurrencyList;
