import classNames from "classnames";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import "./styles.scss";

interface OcurrencyCards {
  ocurrency: Ocurrency[];
}

const OcurrencyCards: FunctionComponent<OcurrencyCards> = ({ ocurrency }) => {
  return (
    <div className="ocurrency__container">
      {ocurrency.map((props: Ocurrency) => {
        return (
          <div className="ocurrency__wrapper">
            <Link
              className="ocurrency__link"
              to={"/ocurrency/" + props.ocurrencyId}
            >
              <div
                className={classNames(
                  "ocurrency__card gradient",
                  props.urgency === "urgent" && "urgent",
                  props.urgency === "high" && "high",
                  props.answeredBy != "" || null && "answered"
                )}
              >
                <div>
                  <span className="ocurrency-title"> Urgência: </span>
                  <span className="ocurrency-urgency">{props.urgency}</span>
                </div>
                <div>
                  <span className="ocurrency_title-ocurrency">Ocorrencia:</span>
                  <span className="ocurrency_id">
                    {props.ocurrencyId + "-"}
                  </span>
                  <span className="ocurrency_type">{props.ocurrencyType}</span>
                </div>
                {props.answeredBy != "" || null && (
                  <div className="ocurrency__answered">
                    <span>Ocorrência Respondida</span>
                  </div>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default OcurrencyCards;
