import React, { FC, useEffect, useState } from "react";
import { getOcurrencys } from "../../services/ocurrency";
import Ocurrency from "../../../mocks/ocurrencys";

// import { Container } from './styles';

const OcurrencyList: FC<OcurrencyList> = () => {
  const [ocurrencyOpen, setOcurrencyOpen] = useState(false);
  const ocurrencys = useEffect(() => {
    getOcurrencys();
  }, []);

  const handleOcurrencyOpen = (event: any) => {
    event.stopPropagation();
    setOcurrencyOpen(!ocurrencyOpen);
  };

  if (!ocurrencyOpen) {
    return (
      <aside>
        {Ocurrency.map((props: any) => {
          return (
            <div className="ocurrency__container">
              <div className="ocurrency__title">
                <button onClick={handleOcurrencyOpen}>
                  {"Ocorrencia " + props.OcurrencyId}
                </button>
              </div>
            </div>
          );
        })}
      </aside>
    );
  }

  return (
    <aside>
      {Ocurrency.map((props: any) => {
        return (
          <div className="ocurrency__container">
            <div className="ocurrency__title">
              <span>{props.OcurrencyId}</span>
            </div>
            <ul>
              <li>{props.OcurrencyType}</li>
              <li>{props.ManyEnvolved}</li>
              <li>{props.Victims}</li>
              <li>{props.GenerationDate}</li>
              <li>{props.Latitude}</li>
              <li>{props.Longitude}</li>
              <li>{props.City}</li>
              <li>{props.State}</li>
              <li>{props.Address}</li>
              <li>{props.Number}</li>
              <li>{props.Neighborhood}</li>
              <li>{props.Complement}</li>
            </ul>
            <span>
              <p>{props.Details}</p>
            </span>
            <button onClick={handleOcurrencyOpen}>{"<-"}</button>
          </div>
        );
      })}
    </aside>
  );
};

export default OcurrencyList;
