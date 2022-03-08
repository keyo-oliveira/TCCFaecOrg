import * as React from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";
import UserNotFound from "../components/UserNotFound";
import OcurrencyList from "../components/UserNotFound";
import { Router } from "@reach/router";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";

// markup
const IndexPage = ({}) => {
  return (
    <>
      <main>
        <LoginContextProvider>
          <Header pageTitle="Site Home" />
          <Router basepath="/">
            <PrivateRoute path={"/home"} />
            <PrivateRoute
              path="/ocurrency/:slug"
              component={OcurrencyList}
            />{" "}
          </Router>
        </LoginContextProvider>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
