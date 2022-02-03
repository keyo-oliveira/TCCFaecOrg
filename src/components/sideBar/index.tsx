import React, { FunctionComponent } from "react";
import './styles.scss'

interface ISideBar {}

const SideBar: FunctionComponent<ISideBar> = ({ children }) => {
  return <aside className="side-bar__container">{children}</aside>;
};

export default SideBar;
