import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import { graphql } from "gatsby";
import Map from "../components/Map";
import OcurrencyList from "../components/OcurrencyList";
import { solveOcurrency } from "../services/solveOcurrency";
import axios from "axios";
import { useSSE } from "use-sse";

export const query = graphql`
  query getOcurrencyData($slug: Int) {
    allPublicAgent {
      nodes {
        cnpj
        organization
        actArea
        name
        cep
        street
        number
        district
      }
    }
    allOcurrencyApi(filter: { ocurrencyId: { eq: $slug } }) {
      nodes {
        ocurrencyId
        ocurrencyType
        manyEnvolved
        victims
        generationDate
        latitude
        longitude
        city
        state
        address
        number
        complement
        details
        answerDate
        neighborhood
        urgency
      }
    }
  }
`;

//todo review fields on query

const OcurrencyPage = ({ data }: any) => {
  const [axiosData, setAxiosData]: any = useState([]);
  const url_atual = window.location.href.split("/");
  const parsedSlug = url_atual[url_atual.length - 1];

  const chargeData = useSSE(async () => {
    return await axios
      .get(`http://localhost:5000/api/Ocorrencias/${parsedSlug}`)
      .catch((error) => {
        console.log(error.message);
      })
      .then((res: any) => {
        setAxiosData(res.data);
      });
  }, [axiosData]);

  window.setInterval(() => {
    chargeData;
  }, 1000);
  console.log("axiosData Estado", axiosData);
  const center = {
    lat: axiosData.latitude,
    lng: axiosData.longitude,
  };

  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>{"Ocorrencia: " + axiosData.ocurrencyId}</title>
            <SideBar>
              <OcurrencyList ocurrency={axiosData} />
              <button
                onClick={() =>
                  solveOcurrency(axiosData, data.allPublicAgent.nodes[0])
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
