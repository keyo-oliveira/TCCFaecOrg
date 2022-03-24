import React, { useEffect } from "react";
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
    allOcurrencyApi(filter: { ocurrencyId: { eq: $slug } }) {
      nodes {
        address
        answerDate
        answeredBy
        caller
        city
        complement
        details
        generationDate
        longitude
        latitude
        victims
        urgency
        state
        ocurrencyType
        ocurrencyId
        number
        neighborhood
        manyEnvolved
      }
    }
  }
`;

//todo review fields on query

const OcurrencyPage = ({ data }: any) => {
  console.log(data);

  const center = {
    lat: data.allOcurrencyApi.nodes.latitude,
    lng: data.allOcurrencyApi.nodes.longitude,
  };
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>
              {"Ocorrencia: " + data.allOcurrencyApi.nodes.ocurrencyId}
            </title>
            <SideBar>
              <OcurrencyList
                ocurrency={data.allOcurrencyApi.nodes}
                OcurrencyFilterId={data.allOcurrencyApi.nodes.ocurrencyId}
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
