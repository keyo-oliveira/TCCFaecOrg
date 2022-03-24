import * as React from "react";
import Header from "../components/Header/";
import Footer from "../components/Footer";
import UserNotFound from "../components/UserNotFound";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="FAEC" />
          <div className={"container"}>
            {" "}
            <UserNotFound />
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
