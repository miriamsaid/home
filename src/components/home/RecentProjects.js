import React, {} from "react";
import"../../css/RecentProjects.css";
import $ from 'jquery';

const RecentProjects = () => {
return (
  <div id="recentprojects" class = "min-vh-100 d-flex align-content-center align-items-center flex-wrap">
<div class="wrap">
<div class="tile"> 
  <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>
  <div class="text">
  <h2>Lorem ipsum.</h2>
  <h3 class="animate-text">More lorem ipsum bacon ipsum.</h3>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>


<div class="tile"> 
  <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80'/>
  <div class="text">
  <h2>Lorem ipsum.</h2>
  <h3 class="animate-text">More lorem ipsum bacon ipsum.</h3>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>
  
  <div class="tile"> 
  <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80'/>
  <div class="text">
  <h2>Lorem ipsum.</h2>
  <h3 class="animate-text">More lorem ipsum bacon ipsum.</h3>
  <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
<div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  </div>
 </div>
 <h1>Recent Projects</h1>
</div>
</div>
  
  );    
};

export default RecentProjects;