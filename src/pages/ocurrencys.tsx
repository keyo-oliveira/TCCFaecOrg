import * as React from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import OcurrencyCards from "../components/OcurrencyList/OcurrencyCards";
import { graphql } from "gatsby";

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
const IndexPage = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="FAEC" />
          <div className={"container"}>
            {" "}
            <OcurrencyCards ocurrency={data.allOcurrencyApi.nodes} />
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
