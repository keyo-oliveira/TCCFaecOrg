import React from "react";
import SideBar from "../components/SideBar";
import "../styles/index.scss";
import { graphql } from "gatsby";
import OcurrencyList from "../components/OcurrencyList";
import Map from "../components/Map";

export const query = graphql`
  query ($slug: Int) {
    allOcurrencyJson(filter: { OcurrencyId: { eq: $slug } }) {
      nodes {
        Address
        AnswerDate
        AnsweredBy
        Caller
        City
        Complement
        Dangerous
        Details
        GenerationDate
        Longitude
        Latitude
        Victims
        Urgency
        State
        OcurrencyType
        OcurrencyId
        Number
        Neighborhood
        ManyEnvolved
      }
    }
  }
`;

const OcurrencyPage = ({ data }: any) => {
  const center = {
    lat: data.allOcurrencyJson.nodes.Latitude,
    lng: data.allOcurrencyJson.nodes.Longitude,
  };
  return (
    <div className={"container"}>
      <SideBar>
        <OcurrencyList
          ocurrency={data.allOcurrencyJson.nodes}
          OcurrencyFilterId={data.allOcurrencyJson.nodes.OcurrencyId}
        />
      </SideBar>
      <Map center={center} />
    </div>
  );
};

export default OcurrencyPage;
