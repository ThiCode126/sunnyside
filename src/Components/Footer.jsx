import React from "react";

import { ReactSVG } from "react-svg";

const Footer = ({ device }) => {
  return (
    <footer>
      <div className="large-wrapper">
        <div className="in-footer">
          <div className="images">
            <img
              src={`/assets/${device}/image-gallery-milkbottles.jpg`}
              alt="gallery-milkbottles"
            />
            <img
              src={`/assets/${device}/image-gallery-orange.jpg`}
              alt="gallery-orange"
            />
            <img
              src={`/assets/${device}/image-gallery-cone.jpg`}
              alt="gallery-cone"
            />
            <img
              src={`/assets/${device}/image-gallery-sugar-cubes.jpg`}
              alt="gallery-sugar-cubes"
            />
          </div>

          <div className="footer-info">
            <ReactSVG src="/assets/logo.svg" className="logo" />
            <div className="menu">
              <div>About</div>
              <div>Services</div>
              <div>Projects</div>
            </div>
            <div className="social">
              <ReactSVG
                src="/assets/icon-facebook.svg"
                className="icon-facebook"
              />
              <ReactSVG
                src="/assets/icon-instagram.svg"
                className="icon-instagram.svg"
              />
              <ReactSVG
                src="/assets/icon-twitter.svg"
                className="icon-twitter"
              />
              <ReactSVG
                src="/assets/icon-pinterest.svg"
                className="icon-pinterest"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
