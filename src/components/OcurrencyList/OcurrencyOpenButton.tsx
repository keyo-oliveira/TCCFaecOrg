import { Link } from "gatsby";
import React, { FunctionComponent } from "react";

interface OcurrencyOpenButton {
  ocurrency: any;
  handleOcurrencyOpen: any;
}

const OcurrencyOpenButton: FunctionComponent<OcurrencyOpenButton> = ({
  ocurrency,
  handleOcurrencyOpen,
}) => {
  return (
    <aside>
      {ocurrency.map((props: any) => {
        return (
          <div className="ocurrency__container">
            <div className="ocurrency__title">
              <Link to={"/ocurrency/" + ocurrency.id}>
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
