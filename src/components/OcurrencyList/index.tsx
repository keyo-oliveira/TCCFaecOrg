import React, { FC, useEffect } from "react";
import Ocurrencies from "./index";
import { getOcurrencys } from "../../services/ocurrency";
import { Ocurrency } from "../../../mocks/ocurrency";

// import { Container } from './styles';

const OcurrencyList: FC<OcurrencyList> = () => {
  const ocurrencys = useEffect(() => {
    getOcurrencys();
  }, []);

  const dataMockedOcurrency = Ocurrency;
  return (
    <aside>
      <Ocurrencies data={dataMockedOcurrency} />
    </aside>
  );
};

export default OcurrencyList;
