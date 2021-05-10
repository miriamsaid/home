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
      <div className="container container-fluid">
        <div className="row">
            <div className="col-md-6 d-lg-block align-self-center float-left flex justify-content-center text-left align-items-center">
              <img
                className="border rounded-circle"
                src="https://dsm01pap002files.storage.live.com/y4myMey4CqacgPEQFgODlJaFCbD4uE9Div_YOr-2i9LU5yR_vM-UCKos8RPhxVyUsGnBzW-PcF7ABhF591P7mfaUd-CwofBzQpdGOrL4h25mWXvJrLQ2lHVsOCHMfEjU-lZ-w6A_1xvePy_A3ZRLKoXM_txE7hZwXPsdg_J22pwVeQKJEDWEEcPIaE78wW0tahE?width=3024&height=3137&cropmode=none"
                alt="profilepicture"
              />
            </div>
          <div className="col-md-6 align-self-center flex justify-content-center align-items-center">
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
