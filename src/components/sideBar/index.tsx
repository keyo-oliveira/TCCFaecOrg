import { Link } from "gatsby";
import React, { FunctionComponent, useState } from "react";
import OpenSideBarIcon from "../icons/SideBarOpen";
import "./styles.scss";

interface ISideBar {}

const SideBar: FunctionComponent<ISideBar> = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  if (!sidebar) {
    return (
      <button onClick={showSidebar}>
        <OpenSideBarIcon />
      </button>
    );
  }

  return (
    <aside className="side-bar__container">
      <div className="navbar">
        <button onClick={showSidebar}>X</button>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">{children}</li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
