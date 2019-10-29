import React, { Component } from "react";
import axios from "axios";

export default class Tutorial extends Component {
  AddFav = id => {
    axios
      .post(`http://localhost:9000/favorite/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { tutorial } = this.props;
    return (
      <div className=" container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded  p-5 mt-2 ">
        <h3 className="favth-panel-heading">{tutorial.Title}</h3>
        <hr className="bg-primary" />
        <h5>
          Visit Tutorial : <a href={tutorial.Link}>{tutorial.Link}</a>
        </h5>
        <div className="favth-panel-body row">
          <span className="col">
            Type of Tutorial : {tutorial.TypeOfTutorial}
          </span>
          <span className="col">Type of Pay : {tutorial.TyoeOfPay}</span>
          <span className="col">Skill Level : {tutorial.SkillLevel}</span>
        </div>
        <label className="badge badge-pill badge-warning">{tutorial.Tag}</label>
        <button
          type="button"
          class="btn btn-primary float-right"
          onClick={() => this.AddFav(tutorial._id)}
        >
          Add To Favourite
        </button>
      </div>
    );
  }
}
