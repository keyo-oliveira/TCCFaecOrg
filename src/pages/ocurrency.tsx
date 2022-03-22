import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import { graphql } from "gatsby";
import Map from "../components/Map";
import OcurrencyList from "../components/OcurrencyList";
import { getOcurrencys } from "../services/ocurrency";

export const query = graphql`
  query ($slug: Int) {
    allOcurrencyJson(filter: { ocurrencyId: { eq: $slug } }) {
      nodes {
        address
        answerDate
        answeredBy
        caller
        city
        complement
        dangerous
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

const OcurrencyPage = ({ data }: any) => {
  console.log(data);

  const axiosData: Ocurrency | any = useEffect(() => {
    const newData = getOcurrencys();
    return newData;
  }, []);

  const center = {
    lat: data.allOcurrencyJson.nodes.latitude,
    lng: data.allOcurrencyJson.nodes.longitude,
  };
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>
              {"Ocorrencia: " + data.allOcurrencyJson.nodes.ocurrencyId}
            </title>
            <SideBar>
              <OcurrencyList
                ocurrency={data.allOcurrencyJson.nodes && axiosData}
                OcurrencyFilterId={
                  data.allOcurrencyJson.nodes.ocurrencyId &&
                  axiosData.ocurrencyId
                }
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
