import React, { FC, useEffect, useState } from "react";
import { getOcurrencys } from "../../services/ocurrency";
import "./styles.scss";
import OcurrencyOpenButton from "./OcurrencyOpenButton";
import OcurrencyOpen from "./OcurrencyOpen";

// import { Container } from './styles';

const OcurrencyList: FC<OcurrencyList> = ({ OcurrencyList }) => {
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
        ocurrency={OcurrencyList}
        handleOcurrencyOpen={handleOcurrencyOpen}
      />
    );
  }

  return (
    <OcurrencyOpen
      ocurrency={OcurrencyList}
      handleOcurrencyOpen={handleOcurrencyOpen}
      OcurrencyFilterId={1}
    />
  );
};

export default OcurrencyList;
