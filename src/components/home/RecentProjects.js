import React, {} from "react";
import"../../css/RecentProjects.css";
import a from "../../editable-stuff/Thesis.pdf";
import b from "../../editable-stuff/ss.pdf";
import c from "../../editable-stuff/fea.pdf";

const RecentProjects = () => {
return (
  
<div id="recentprojects" class = "text-center bck-white min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
 <div class = "container-fluid">
   <div class="container">
     <h1>Recent Projects</h1>
     <p></p>
   </div>
<div class="bod2 d-lg-block align-self-center flex justify-content-center align-items-center">
<div class="tile clearfix" > 
  <img src='https://dm2305files.storage.live.com/y4m_ScBr9LwiOTw-OVebeBMsD_zt3Cnwg2pjcmmW4BVZp_XWimdt23T7l-V3ZZOZGrXUMP3-Z8eLSxW-yg3glS_qD44PYkq2Q27YBbI_rN3Uz5UX25O3RXYn38Fdp7kcUlGyON50Ejq7b7iGwC0R9wXv51ZR6mS6de3M5w-ZR7QFprVtW_LyNXUKkXEyI9rLSmc?width=1294&height=1294&cropmode=none'/>
  <div class="text">
  <h2 class= "tile2">The FloBoat</h2>
  <h3 class="animate-text">a floating beach wheelchair.</h3>
  <p class="animate-text p1"></p>
  <p className="lead animate-text b1 text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={a}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  See Publication
                </a>
              </p>
    <span></span>
    <span></span>
    <span></span>
  </div>
 </div>


<div class="tile clearfix"> 
  <img src='https://dm2305files.storage.live.com/y4mNQGpxB6UceDJFdTClwoJzS_ruslup-wt9dGGxQM9wdWKKV1gOS7CRvkBbCgCmKjFWnFJh_9WDyGZr66uoKnt0lAtc6bPhoMxqrjKgnrCUh1bbRzr4Dcugx9GMCl3Pf0AQMpNqA_532Pdq29g0JPzl7YjPntTh_n_zO1rMkCKcxjX_ovHxKyj34Ptgh5LfXcX?width=723&height=723&cropmode=none'/>
  <div class="text">
  <h2 class= "tile2">Simple Sorting</h2>
  <h3 class="animate-text">an automated recyling sorting bin.</h3>
  <p class="animate-text p1"></p>
  <p className="lead animate-text b1 text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={b}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  See Publication
                </a>
              </p>
    <span></span>
    <span></span>
    <span></span>
  </div>
 </div>
  
  <div class="tile clearfix"> 
  <img src="https://dm2305files.storage.live.com/y4m0z-1m7pbFsTERo2jcFiTL5vbWJvPx3V3g2ruZOVRRhkKnfdEU07opEatYYBSKvyGBrmAKI8D3kxEa67R-2OjEGNSw963ODlgkxDR4E2Hz87xUlOLrGEPc8HE91MRZtjZoU-wgHTibPSQdDPwBLd6uxkq-C_ApazIVgaG9YEFUmmRAnfdva993RFKQIC4YQ5G?width=978&height=978&cropmode=none"/>
  <div class="text">
  <h2 class= "tile2">The FEA of a Tidal Turbine</h2>
  <h3 class="animate-text">The Investigation and enhancement of the internal blade design of a Horizontal Axis Tidal Turbine (HATT) </h3>
  <p class="animate-text p1"></p>
  <p className="lead animate-text b1 text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={c}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  See Publication
                </a>
              </p>
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
</div>
</div>
</div>
  
  );    
};

export default RecentProjects;