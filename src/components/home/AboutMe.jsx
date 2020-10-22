import React, { useState, useEffect } from "react";
import Pdf from "../../editable-stuff/resume.pdf";
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0 min-vh-100 d-flex align-content-center align-items-center flex-wrap">
      <div className="container container-fluid p-5">
        <div className="row">
          {showInsta && (
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src="https://dm2305files.storage.live.com/y4monJJ8u4u4cg7uomKV9mW_vWWAbAU1VjBp7MDojMReWHaao3Vcy5SYnM-o17sb3hTyALnlnG65jvUnh6sdfpdClG_7f0lzPP98kplgvH21J22tktD5UPcFSdg2wVK0woPTARIMA9XPzi1jRaanF2bsCLeyjjUapElyyV5tXbtaWBnq8AiyGSWRShctBBA2Hb1?width=1367&height=1367&cropmode=none"
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
