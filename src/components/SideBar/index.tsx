import React, { FunctionComponent, useState } from "react";
import OpenSideBarIcon from "../icons/SideBarOpen";
import "./styles.scss";

interface ISideBar {}

const SideBar: FunctionComponent<ISideBar> = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  if (!sidebar) {
    return (
      <button className="side-bar__open-button" onClick={showSidebar}>
        <OpenSideBarIcon />
        Ocorrências
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
