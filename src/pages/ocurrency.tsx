import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import { graphql } from "gatsby";
import Map from "../components/Map";
import OcurrencyList from "../components/OcurrencyList";
import { solveOcurrency } from "../services/solveOcurrency";

export const query = graphql`
  query getOcurrencyData($slug: Int) {
    allPublicAgent {
      nodes {
        actArea
        cep
        cnpj
        dateCreation
        district
        id
        name
        number
        organization
        organizationId
        password
        username
        street
      }
    }
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
        id
        latitude
        longitude
        manyEnvolved
        neighborhood
        number
        ocurrencyId
        ocurrencyType
        state
        urgency
        victims
      }
    }
  }
`;

//todo review fields on query

const OcurrencyPage = ({ data }: any) => {
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

  const publicAgent = data.allPublicAgent.nodes[0];
  const answerDate = new Date();
  const ocurrency = data.allOcurrencyApi.nodes[0];

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
              <button
                onClick={() =>
                  solveOcurrency(ocurrency, publicAgent, answerDate)
                }
              >
                {"Socorro enviado"}
              </button>
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
