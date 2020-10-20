import React, {} from "react";
import"../../css/Education.css";
import $ from 'jquery';

const Education = () => {
return (
<div id="education" class = "bgstyle min-vh-100 d-flex align-content-center align-items-center flex-wrap">
    <div class="container-fluid">
      <div class= "row align-content-center align-items-center">
        <div class="col-4 d-none d-lg-block align-self-center hm">
          <h1>Education</h1>
        </div>
        <div class = "col-8 d-none d-lg-block align-self-center">
              <div class="card container">
                <div class="row">
                  <div class="col-4 d-none d-lg-block align-self-top container"><img class = "image" src="https://images.squarespace-cdn.com/content/564b434ee4b0b5206c3a3cc6/1519757700437-AVZPW3WBDUUT164O3VJA/UCL-Logo-1.jpg?content-type=image%2Fjpeg"/></div>
                  <div class = "col-8 d-none d-lg-block align-self-center container">
                <h2 class = "title">Engineering with Innovation and Entrepreneurship, Master’s in Science (MSc)</h2>
                <h3 class = "text">University College London - Predicted Distinction</h3>
                <ul class = "list">
                  <li>Materials and Fatigue	- 73%</li>
                  <li>Applications of Biomedical Engineering	- 81%</li>
                  <li>Mastering Entrepreneurship - 79%</li>
                  <li>Entrepreneurial finance	- 63%</li>
                  <li>Project Management- 74%</li>
                  <li>New and Renewable Energy Systems - 69%</li>
                  <li>Innovation and Group Design Project	- 68%</li>
                  <li>Individual Thesis - TBC</li>                  
                </ul>                
              </div>
            </div>
          </div>
          <div class="card container">
                <div class="row">
                  <div class="col-4 d-none d-lg-block align-self-top container"><img class = "image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cardiff_University_%28logo%29.svg/1024px-Cardiff_University_%28logo%29.svg.png"/></div>
                  <div class = "col-8 d-none d-lg-block align-self-center container">
                <h2 class = "title">Mechanical Engineering, Bachelor’s in Engineering (BEng)</h2>
                <h3 class = "text">Cardiff University - 1st Class Honours</h3>
                <ul class = "list">
                  <li>Throughout the 3-year course, I participated in key engineering modules such as fluid mechanics, solid mechanics, materials and fatigue, renewable energy systems, manufacturing systems and object orientated computing.</li>
                  <li>Year 1 - 65%</li>
                  <li>Year 2 - 77%</li>
                  <li>Year 3 - 70%</li>
                  <li>Individual Dissertation - 75%</li>              
                </ul>                
              </div>
            </div>
          </div>
            </div>
          </div>
       </div>
</div>
  );    
};

export default Education;
