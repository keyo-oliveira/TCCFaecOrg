import * as React from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";
import UserNotFound from "../components/UserNotFound";
import { Router } from "@reach/router";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import SideBar from "../components/SideBar";
import OcurrencyCards from "../components/OcurrencyList/OcurrencyCards";
import { graphql } from "gatsby";

export const query = graphql`
  query ($slug: Int) {
    allOcurrencyJson(filter: { OcurrencyId: { eq: $slug } }) {
      nodes {
        AnswerDate
        Urgency
        OcurrencyType
        OcurrencyId
      }
    }
  }
`;
const IndexPage = ({ data }: any) => {
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="FAEC" />
          <div className={"container"}>
            {" "}
            <SideBar>
              <OcurrencyCards ocurrency={data.allOcurrencyJson.nodes} />
            </SideBar>
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
