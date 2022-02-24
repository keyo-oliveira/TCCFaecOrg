import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";
import UserNotFound from "../components/UserNotFound";
import { Router } from "@reach/router";
import { LoginContextProvider, useLogin } from "../contexts/loginContext";
import "../styles/index.scss";

// markup
const IndexPage = ({}) => {
  const { isLoggedIn } = useLogin();
  return (
    <>
      <main>
        <LoginContextProvider>
          <Header pageTitle="Site Home" />
          <Router basepath="/">
            <PrivateRoute path={"/home"} />
          </Router>
          {!isLoggedIn && <UserNotFound />}
        </LoginContextProvider>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
