import React, { useState, useEffect, useCallback } from "react";
import {
  projectHeading,
} from "../../editable-stuff/configurations.json";
import"../../css/Project.css";
import $ from 'jquery';

$(document).ready(function () {
  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage)
      .removeClass("inactive")
      .addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  }

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  }

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  }

  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });
});

const Project = () => {
  return (
    <body>
    <div id="projects" class="skw-pages">
      <div class="skw-page skw-page-1 active">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h1 class="skw-page__heading">Recent Pojects </h1>
              <p class="skw-page__description">Scroll for more!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-2">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h1 class="skw-page__heading">The FloBoat</h1>
              <p class="skw-page__description">a floating beach wheelchair.</p>
            </div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-3">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h1 class="skw-page__heading">Simple Sorting</h1>
              <p class="skw-page__description">Recycling made easy with the simple sorting automated soring bin.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-4">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h1 class="skw-page__heading">The Finite Element Analysis of a Tidal Turbine</h1>
              <p class="skw-page__description">Ok, ok, just one more scroll!</p>
            </div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
      </div>
      <div class="skw-page skw-page-5">
        <div class="skw-page__half skw-page__half--left">
          <div class="skw-page__skewed">
            <div class="skw-page__content"></div>
          </div>
        </div>
        <div class="skw-page__half skw-page__half--right">
          <div class="skw-page__skewed">
            <div class="skw-page__content">
              <h1 class="skw-page__heading">The Trike!</h1>
              <p class="skw-page__description">
                Feel free to check
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
      );    
};

export default Project;
