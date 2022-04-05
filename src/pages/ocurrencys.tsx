import React, { useState } from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import OcurrencyCards from "../components/OcurrencyList/OcurrencyCards";
import { graphql } from "gatsby";

export const query = graphql`
  query getOcurrencys($slug: Int) {
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

const IndexPage = ({ data }) => {
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="FAEC" />
          <div className={"container"}>
            <OcurrencyCards ocurrency={data.allOcurrencysJson.nodes} />
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
