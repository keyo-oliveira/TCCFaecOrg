import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {LoginContextProvider} from "../../src/contexts/loginContext";

const HomePage = ({ children }) => {
  return (
    <>
      <LoginContextProvider>
        <main>
          <Header pageTitle="Site Home" />
          <div className={"container"}>
            {" "}
            <title>{"home"}</title>
            {children}
          </div>
          <Footer />
        </main>
      </LoginContextProvider>
    </>
  );
};

export default HomePage;
