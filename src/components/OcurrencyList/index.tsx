import React, { FC, useEffect, useState } from "react";
import { getOcurrencys } from "../../services/ocurrency";
import Ocurrency from "../../../mocks/ocurrencys";
import "./styles.scss";
import OcurrencyOpenButton from "./OcurrencyOpenButton";
import OcurrencyOpen from "./OcurrencyOpen";

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
      <OcurrencyOpenButton
        Ocurrency={Ocurrency}
        handleOcurrencyOpen={handleOcurrencyOpen}
      />
    );
  }

  return (
    <OcurrencyOpen
      Ocurrency={Ocurrency}
      handleOcurrencyOpen={handleOcurrencyOpen}
    />
  );
};

export default OcurrencyList;
