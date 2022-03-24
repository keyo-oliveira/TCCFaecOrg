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

const OcurrencyPage = ({ data, allOcurrencyApi }: any) => {
  const latitude = data.allOcurrencyApi.nodes
    .map((item: any) => item.latitude)
    .toString();
  const longitude = data.allOcurrencyApi.nodes
    .map((item: any) => item.longitude)
    .toString();
  const center = {
    lat: latitude,
    lng: longitude,
  };
  console.log(center);
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
                OcurrencyFilterId={data.allOcurrencyApi.nodes.map(
                  (item: any) => item.ocurrencyId
                )}
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
