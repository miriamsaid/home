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
    <div id="aboutme" className="jumbotron jumbotron-fluid bck-white min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
      <div className="container container-fluid ">
        <div className="row">
            <div className="col-md-6 d-lg-block align-self-center flex justify-content-center align-items-center">
              <img
                className="border rounded-circle im"
                src="https://dm2305files.storage.live.com/y4monJJ8u4u4cg7uomKV9mW_vWWAbAU1VjBp7MDojMReWHaao3Vcy5SYnM-o17sb3hTyALnlnG65jvUnh6sdfpdClG_7f0lzPP98kplgvH21J22tktD5UPcFSdg2wVK0woPTARIMA9XPzi1jRaanF2bsCLeyjjUapElyyV5tXbtaWBnq8AiyGSWRShctBBA2Hb1?width=1367&height=1367&cropmode=none"
                alt="profilepicture"
              />
            </div>
          <div className="col-md-6">
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="text-center">{aboutDescription}</p>
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
