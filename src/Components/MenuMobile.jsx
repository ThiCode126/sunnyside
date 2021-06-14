import React, { useState } from "react";

import { ReactSVG } from "react-svg";

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-mobile ${isMenuOpen ? "open" : "closed"}`}>
      <ReactSVG
        src="/assets/icon-hamburger.svg"
        className="hamburger"
        onClick={toggleMenu}
      />
      <div className="menu">
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div className="button">Contact</div>
      </div>
    </div>
  );
};

export default MenuMobile;
