import React from "react";

const SecondSection = () => {
  return (
    <section id="second">
      <div className="large-wrapper">
        <div className="in-section">
          <div className="content-wrapper">
            <h3>Client testimonials</h3>
            <div className="cards">
              <div className="card">
                <img src="/assets/image-emily.jpg" alt="emily" />
                <p>
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <h5>Emily R.</h5>
                <h6>Marketing Director</h6>
              </div>
              <div className="card">
                <img src="/assets/image-thomas.jpg" alt="thomas" />
                <p>
                  Sunnyside’s enthusiasm coupled with their keen interest in our
                  brand’s success made it a satisfying and enjoyable experience.
                </p>
                <h5>Thomas S.</h5>
                <h6>Chief Operating Officer</h6>
              </div>
              <div className="card">
                <img src="/assets/image-jennie.jpg" alt="jennie" />
                <p>
                  Incredible end result! Our sales increased over 400% when we
                  worked with Sunnyside. Highly recommended!
                </p>
                <h5>Jennie F.</h5>
                <h6>Business Owner</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
