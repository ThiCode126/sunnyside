import React from "react";

const FirstSection = ({ device }) => {
  return (
    <section id="first">
      <div className="large-wrapper">
        <div className="in-section">
          <div id="part1">
            <img
              src={`/assets/${device}/image-transform.jpg`}
              alt="transform"
            />
            <div className="text-block">
              <h2>Transform your brand</h2>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <span className="more cta yellow">Learn more</span>
            </div>
          </div>

          <div id="part2">
            <img
              src={`/assets/${device}/image-stand-out.jpg`}
              alt="stand-out"
            />
            <div className="text-block">
              <h2>Stand out to the right audience</h2>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <span className="more cta red">Learn more</span>
            </div>
          </div>

          <div id="part3">
            <div id="graphic" className="card">
              <h4>Graphic Design</h4>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
            <div id="photo" className="card">
              <h4>Photography</h4>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
