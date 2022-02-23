import * as React from "react";
import { FunctionComponent } from "react";
const AnsweredBy = new Date();

const Ocurrencies: FunctionComponent<Ocurrency> = (props) => {
  return (
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
    </div>
  );
};

export default Ocurrencies;
