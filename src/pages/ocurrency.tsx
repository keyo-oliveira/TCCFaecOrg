import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import { graphql } from "gatsby";
import Map from "../components/Map";
import OcurrencyList from "../components/OcurrencyList";
import { solveOcurrency } from "../services/solveOcurrency";
import Caller from "../components/OcurrencyList/Caller";

export const query = graphql`
  query getOcurrency($slug: Int) {
    allOcurrencysJson(filter: { ocurrencyId: { eq: $slug } }) {
      nodes {
        address
        answerDate
        complement
        details
        city
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
        caller {
          birthDate
          cep
          cpf
          dateCreation
          district
          email
          name
          number
          rg
          street
          userId
        }
      }
    }
  }
`;

//todo review fields on query

const OcurrencyPage = ({ data }: any) => {
  const center = {
    lat: data.allOcurrencysJson.nodes[0].latitude,
    lng: data.allOcurrencysJson.nodes[0].longitude,
  };
  console.log(data);

  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>
              {"Ocorrencia: " + data.allOcurrencysJson.nodes.ocurrencyId}
            </title>
            <SideBar>
              <OcurrencyList ocurrency={data.allOcurrencysJson.nodes[0]} />
              <button className="ocurrency__solve-button"
                onClick={() =>
                  solveOcurrency(
                    data.allOcurrencysJson.nodes[0],
                    data.allPublicAgent.nodes[0]
                  )
                }
              >
                {"Marcar como socorrida"}
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
