import React, {} from "react";
import"../../css/Skills.css";

const Skills = () => {
    return (
    <div id="skills" class="bck-white min-vh-100 container-fluid container align-content-center align-items-center flex-wrap d-flex">
      <div class="align-content-center ">
        <h1 class= "display-4 mb-5 text-center">Skills</h1>
        <div class="row align-content-center align-items-center">
          <div class="col-md">
            <img
              className= ""
              src="https://img.icons8.com/color/144/000000/solidworks.png">
            </img>
            <p>Proficient in SolidWorks enabling me to create Computer Aided Design Models that can be further analysed in SolidWorks Design Study</p>
          </div>
          <div class="col-md">
            <img
              className= "big "
              src="https://storage.googleapis.com/site.esss.co/81309985-logo-ansys.png">
            </img>
            <p>Experienced in ANSYS workbench specialising in analysing models using Static Structual and determining composite layups using ACP (Pre/Post) </p>
          </div>
          <div class="col-md">
            <img
              className= ""
              src="https://img.icons8.com/color/144/000000/c-plus-plus-logo.png">
            </img>
            <p>Interdmediete level C++ scripter with knowledge on key C++ principals and previous experience in creating specific classes and libraries</p>
          </div>
          </div>
          <div class="row align-content-center align-items-center">
          <div class="col-md">
            <img
              className= ""
              src="https://img.icons8.com/nolan/150/matlab.png">
            </img>
            <p>Competent in MatLab and have previously used MatLab to manipulate datasets and process images. </p>
          </div>
          <div class="col-md">
            <img
              className= ""
              src="https://img.icons8.com/color/144/000000/python.png">
            </img>
            <p>Self-taught Python scripter with previous experience in using Python to recognise labels and logos using image recognition.</p>
          </div>
          <div class="col-md">
            <img
              className= "space"
              src="https://img.icons8.com/ios/100/000000/more.png">
            </img>
            <p>Competent in other coding languages and softwares used for the purposes of Web Design such as; HTML,CSS, Adobe Photoshop and Ilustrator.</p>
          </div>
          </div>
          </div>
          </div>
    );
};

export default Skills;