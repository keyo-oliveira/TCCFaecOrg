import * as React from "react";
import { LoginContextProvider } from "../contexts/loginContext";
import "../styles/index.scss";
import Login from "../components/Login";

const IndexPage = () => {
  return (
    <>
      <LoginContextProvider>
        <Login />
      </LoginContextProvider>
    </>
  );
};

export default IndexPage;
