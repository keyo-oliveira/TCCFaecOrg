import { Link } from "gatsby";
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
              <Link to={"/ocurrency/" + Ocurrency.id}>
                {"Ocorrencia " + props.OcurrencyId}
              </Link>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default OcurrencyOpenButton;
