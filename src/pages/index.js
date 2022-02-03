import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OcurrencyList from "../components/Ocurrency";
import SideBar from "../components/sideBar";
import { LoginContextProvider, useLogin } from "../contexts/loginContext";
import { container } from "../styles/index.module.scss";
// markup
const IndexPage = ({ pageTitle }) => {
  const { isLoggedIn } = useLogin();
  return (
    <main>
      <LoginContextProvider>
        <Header pageTitle="Site Home" />
        <title>{pageTitle}</title>
        <div className={container}>
          {isLoggedIn ? (
            <SideBar>
              <OcurrencyList />
            </SideBar>
          ) : (
            <span> faça login para continuar</span>
          )}
        </div>
      </LoginContextProvider>
      <Footer />
    </main>
  );
};

export default IndexPage;
