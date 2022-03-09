import * as React from "react";
import { Link } from "gatsby";
import Modal from "../Modal";
import Login from "../Login";

import "./styles.scss";
import { useLogin } from "../../contexts/loginContext";

const Header = ({ pageTitle, pageHeading, children }: any) => {
  const { isLoggedIn, logout } = useLogin();
  return (
    <div className={"header__container"}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={"nav-links"}>
          <li className={"nav-link-item"}>
            <Link className={"nav-link-text"} to="/">
              FAEC
            </Link>
          </li>
          <li className={"nav-right"}>
            {!isLoggedIn ? (
              <Modal buttonText={"login"} content={<Login />} />
            ) : (
              <button className={"header__logout-button"} onClick={logout}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
      <h1 className={"heading"}>{pageHeading}</h1>
      {children}
    </div>
  );
};

export default Header;
