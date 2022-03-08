import React, { FC, useEffect, useState } from "react";
import { getOcurrencys } from "../../services/ocurrency";
import "./styles.scss";
import OcurrencyOpenButton from "./OcurrencyOpenButton";
import OcurrencyOpen from "./OcurrencyOpen";

// import { Container } from './styles';

const OcurrencyList: FC<OcurrencyList> = ({ slug , Ocurrency}: any) => {
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
      OcurrencyFilterId={slug}
    />
  );
};

export default OcurrencyList;
