import * as React from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";
import UserNotFound from "../components/UserNotFound";
import OcurrencyList from "../components/OcurrencyList";
import { Router } from "@reach/router";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import SideBar from "../components/SideBar";
import Ocurrency from "../../mocks/ocurrencys";

// markup
const IndexPage = ({}) => {
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="FAEC" />
          <div className={"container"}>
            {" "}
            <SideBar>
              <OcurrencyList OcurrencyList={Ocurrency} />
            </SideBar>
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
