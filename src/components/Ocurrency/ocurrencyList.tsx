import React, { FC, useEffect } from "react";
import Ocurrencies from ".";
import { getOcurrencys } from "../../services/ocurrency";

// import { Container } from './styles';

const OcurrencyList: FC<OcurrencyList> = () => {
  const ocurrencys = useEffect(() => {
    getOcurrencys();
  }, []);

  return (
    <aside>
      {/* {ocurrencys.map((ocurrency: Ocurrency) => {
        <Ocurrencies data={{ ...ocurrency }} />;
      })} */}
    </aside>
  );
};

export default OcurrencyList;
