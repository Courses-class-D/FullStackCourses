import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class Herobox extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="hero_boxes">
          <div class="hero_boxes_inner">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 hero_box_col">
                  <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src="images/earth-globe.svg" class="svg" alt="" />
                    <div class="hero_box_content">
                      <h2 class="hero_box_title">Online Courses</h2>
                    
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 hero_box_col">
                  <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src="images/books.svg" class="svg" alt="" />
                    <div class="hero_box_content">
                      <h2 class="hero_box_title">CodingAcademy</h2>
                     
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 hero_box_col">
                  <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src="images/professor.svg" class="svg" alt="" />
                    <div class="hero_box_content">
                      <h2 class="hero_box_title">Trainers</h2>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
