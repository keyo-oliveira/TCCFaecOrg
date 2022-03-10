import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import OcurrencyList from "../components/OcurrencyList";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import { graphql } from "gatsby";

export const query = graphql`
  query ($slug: Int) {
    ocurrencyJson(OcurrencyId: { eq: $slug }) {
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
`;

const OcurrencyPage = ({ data }: any) => {
  const ocurrency = data.ocurencyJson;
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>{"home"}</title>
            <SideBar>
              <OcurrencyList OcurrencyList={ocurrency} />
            </SideBar>
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default OcurrencyPage;
