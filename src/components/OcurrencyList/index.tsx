import React, { FC, useEffect } from "react";
import { getOcurrencys } from "../../services/ocurrency";
import  Ocurrency  from "../../../mocks/ocurrencys";

// import { Container } from './styles';

const OcurrencyList: FC<OcurrencyList> = () => {
  const ocurrencys = useEffect(() => {
    getOcurrencys();
  }, []);

  console.log(Ocurrency)
  

  return (
    <aside>
      {Ocurrency.map((props: any) => {
        <div className="ocurrency__container">
          <div className="Ocurrency Title">
            <span>{props.OcurrencyId}</span>
            <span>{props.OcurrencyType}</span>
            <span>{props.ManyEnvolved}</span>
            <span>{props.Victims}</span>
            <span>{props.GenerationDate}</span>
            <span>{props.Latitude}</span>
            <span>{props.Longitude}</span>
            <span>{props.City}</span>
            <span>{props.State}</span>
            <span>{props.Address}</span>
            <span>{props.Number}</span>
            <span>{props.Neighborhood}</span>
            <span>{props.Complement}</span>
          </div>
          <span>
            <p>{props.Details}</p>
          </span>
        </div>;
      })}
    </aside>
  );
};

export default OcurrencyList;
