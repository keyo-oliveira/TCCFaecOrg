import { Link } from "gatsby";
import React, { FunctionComponent, useState } from "react";
import "./styles.scss";

interface ISideBar {}

const SideBar: FunctionComponent<ISideBar> = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <aside className="side-bar__container">
      {" "}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <button onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              {children}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
