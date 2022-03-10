import React, { FC, useEffect, useState } from "react";
import "./styles.scss";
import OcurrencyCards from "./OcurrencyCards";
import OcurrencyOpen from "./OcurrencyOpen";

const OcurrencyList: FC<OcurrencyList> = ({ OcurrencyList }) => {
  const [ocurrencyOpen, setOcurrencyOpen] = useState(false);
  // const ocurrencys = useEffect(() => {
  //   getOcurrencys();
  // }, []);

  const handleOcurrencyOpen = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setOcurrencyOpen(!ocurrencyOpen);
  };

  if (!ocurrencyOpen) {
    return <OcurrencyCards ocurrency={OcurrencyList} />;
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
