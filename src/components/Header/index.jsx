import * as React from "react";
import { Link } from "gatsby";
import Modal from "../Modal";
import Login from "../Login";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navRight,
} from "./header.module.scss";

const Header = ({ pageTitle, pageHeading, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              FAEC
            </Link>
          </li>
          <li className={navRight}>
            <Modal buttonText={"login"} content={<Login />} />
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </div>
  );
};

export default Header;
