import React, { FunctionComponent } from "react";

interface OcurrencyOpen {
  ocurrency: any;
  handleOcurrencyOpen: any;
  OcurrencyFilterId: number;
}

const OcurrencyOpen: FunctionComponent<OcurrencyOpen> = ({
  ocurrency,
  handleOcurrencyOpen,
  OcurrencyFilterId,
}) => {
  return (
    <aside>
      {ocurrency
        .filter(function (Ocurrency: any) {
          return Ocurrency.OcurrencyId === OcurrencyFilterId;
        })
        .map(function (props: any) {
          return (
            <div className="ocurrency__container" key={props.index}>
              <div className="ocurrency__title">
                <span>{props.OcurrencyId + " " + props.Urgency}</span>
              </div>
              <ul className="ocurrency_list">
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">
                    Tipo de ocorrência:{" "}
                  </span>
                  <span>{props.OcurrencyType}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">
                    Numeros de envolvidos:{" "}
                  </span>
                  <span>{props.ManyEnvolved}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">
                    Numero de vitimas:{" "}
                  </span>
                  <span>{props.Victims}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Data de geração: </span>
                  <span>{props.GenerationDate}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Latitude: </span>
                  <span>{props.Latitude}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Longitude: </span>
                  <span>{props.Longitude}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Cidade: </span>
                  <span>{props.City}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Estado: </span>
                  <span>{props.State}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Rua: </span>
                  <span>{props.Address}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Número: </span>
                  <span>{props.Number}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Bairro: </span>
                  <span>{props.Neighborhood}</span>
                </li>
                <li className="ocurrency_list-item">
                  <span className="ocurrency_item-type">Complemento: </span>
                  <span>{props.Complement}</span>
                </li>
              </ul>
              <div className="details-container">
                <strong>Detalhes: </strong>
                <span>
                  <p>{props.Details}</p>
                </span>
              </div>
            </div>
          );
        })}
      <button onClick={handleOcurrencyOpen}>{"<-"}</button>
    </aside>
  );
};

export default OcurrencyOpen;