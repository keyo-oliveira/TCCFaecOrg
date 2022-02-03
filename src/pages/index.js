import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OcurrencyList from "../components/Ocurrency";
import SideBar from "../components/sideBar";
import { container } from "../styles/index.module.scss";
// markup
const IndexPage = ({ pageTitle }) => {
  return (
    <main>
      <Header pageTitle="Site Home" />
      <title>{pageTitle}</title>
      <div className={container}>
        <SideBar>
          <OcurrencyList />
        </SideBar>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
