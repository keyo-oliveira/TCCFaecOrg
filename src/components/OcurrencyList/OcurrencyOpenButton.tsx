import React, { FunctionComponent } from "react";

interface OcurrencyOpenButton {
  Ocurrency: any;
  handleOcurrencyOpen: any;
}

const OcurrencyOpenButton: FunctionComponent<OcurrencyOpenButton> = ({
  Ocurrency,
  handleOcurrencyOpen,
}) => {
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
};

export default OcurrencyOpenButton;
