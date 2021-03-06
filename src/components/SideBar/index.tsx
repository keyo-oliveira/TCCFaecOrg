import React, { FunctionComponent, useState } from "react";
import { useLogin } from "../../contexts/loginContext";
import OpenSideBarIcon from "../icons/SideBarOpen";
import "./styles.scss";

interface ISideBar {}

const SideBar: FunctionComponent<ISideBar> = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  const { isLoggedIn } = useLogin();

  const showSidebar = () => setSidebar(!sidebar);

  if (!isLoggedIn) {
    return null;
  }

  if (!sidebar) {
    return (
      <button className="side-bar__open-button" onClick={showSidebar}>
        <OpenSideBarIcon />
        OcorrĂȘncias
      </button>
    );
  }

  return (
    <aside className="side-bar__container">
      <button className="side-bar_close-button" onClick={showSidebar}>
        X
      </button>
      <div className="side-bar__navbar">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {children}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
