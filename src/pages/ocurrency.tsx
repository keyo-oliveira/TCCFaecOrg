import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import { graphql } from "gatsby";
import Map from "../components/Map";
import OcurrencyList from "../components/OcurrencyList";

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
  console.log(data);
  const center = {
    lat: data.allOcurrencyJson.nodes.Latitude,
    lng: data.allOcurrencyJson.nodes.Longitude,
  };
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>
              {"Ocorrencia: " + data.allOcurrencyJson.nodes.OcurrencyId}
            </title>
            <SideBar>
              <OcurrencyList
                ocurrency={data.allOcurrencyJson.nodes}
                OcurrencyFilterId={data.allOcurrencyJson.nodes.OcurrencyId}
              />
            </SideBar>
            <Map center={center} />
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default OcurrencyPage;
