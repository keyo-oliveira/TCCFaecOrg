import React, { useState } from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import OcurrencyCards from "../components/OcurrencyList/OcurrencyCards";
import { graphql } from "gatsby";
import axios from "axios";
import { useSSE } from "use-sse";

export const query = graphql`
  query ($slug: Int) {
    allOcurrencyApi(filter: { ocurrencyId: { eq: $slug } }) {
      nodes {
        answeredBy
        ocurrencyType
        ocurrencyId
      }
    }
  }
`;

const IndexPage = () => {
  const [axiosData, setAxiosData]: any = useState([]);

  const chargeData = useSSE(async () => {
    return await axios
      .get("http://localhost:5000/api/Ocorrencias")
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

  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="FAEC" />
          <div className={"container"}>
            <OcurrencyCards ocurrency={axiosData} />
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
