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
              to={"/ocurrency/" + props.OcurrencyId}
            >
              <div
                className={classNames(
                  "ocurrency__card gradient",
                  props.Urgency === "urgent" && "urgent",
                  props.Urgency === "high" && "high",
                  props.AnsweredBy != "" && "answered"
                )}
              >
                <div>
                  <span className="ocurrency-title"> Urgência: </span>
                  <span className="ocurrency-urgency">{props.Urgency}</span>
                </div>
                <div>
                  <span className="ocurrency_title-ocurrency">Ocorrencia:</span>
                  <span className="ocurrency_id">
                    {props.OcurrencyId + "-"}
                  </span>
                  <span className="ocurrency_type">{props.OcurrencyType}</span>
                </div>
                {props.AnsweredBy != "" && (
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
