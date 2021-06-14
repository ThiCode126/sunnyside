import React from "react";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

import { ReactSVG } from "react-svg";

const Header = ({ device }) => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="in-header">
          <ReactSVG src="/assets/logo.svg" className="logo" />
          {device === "mobile" ? <MenuMobile /> : <MenuDesktop />}
        </div>
        <h1 id="title">We are creatives</h1>
        <ReactSVG src="/assets/icon-arrow-down.svg" className="arrow-down" />
      </div>
    </header>
  );
};

export default Header;
