import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Ocurrency from "../../../mocks/ocurrencys";
import { graphql } from "gatsby";
import OcurrencyList from "../../components/OcurrencyList";
import { LoginContextProvider } from "../../contexts/loginContext";
import "../../styles/index.scss";

const HomePage = () => {
  const getSlug = () => {
    return 1;
  };
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>{"home"}</title>
            <SideBar>
              <OcurrencyList slug={getSlug} Ocurrency={Ocurrency} />
            </SideBar>
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

// export async function config() {
//   const { data } = graphql`
//     {
//       AllOcurrency
//     }
//   `
//   return ({ params }) => {
//     return {
//       defer: params.name === data.someValue.name,
//     }
//   }
// }

export default HomePage;
