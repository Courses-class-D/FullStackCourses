import React, { Component } from "react";
import Profile from "./Profile";

export default class Tutorial extends Component {
  state = {
    btnVale: "Add To Favourite"
  };
  changeFav = btnVale => {
    //  this.setState({btnVale})
    if (this.state.btnVale === "Add To Favourite") {
      this.setState({ btnVale: "Remove" });
    } else if (this.state.btnVale === "Remove") {
      this.setState({ btnVale: "Add To Favourite" });
    }
  };

  changeValues = event => {
    let newValue = event.target.value;
    this.setState({ [event.target.name]: newValue });
  };

  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
  };
  render() {
    const { tutorial } = this.props;
    return (
      <div className=" container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded  p-5 mt-2 ">
        <h3 className="favth-panel-heading">{tutorial.Title}</h3>
        <hr className="bg-primary" />
        <h5>
        Visit Tutorial :  <a href= {tutorial.Link} target="_blank">{tutorial.Link}</a>

        </h5>
        <div className="favth-panel-body row">
          <span className="col">
            Type of Tutorial : {tutorial.TypeOfTutorial}
          </span>
          <span className="col">Type of Pay : {tutorial.TyoeOfPay}</span>
          <t />
          <span className="col">Skill Level : {tutorial.SkillLevel}</span>
          <t />
        </div>
        <label className="badge badge-pill badge-warning">{tutorial.Tag}</label>
        <button
          type="button"
          className="btn-primary float-right"
          onClick={this.changeFav}
        >
          {this.state.btnVale}
        </button>
      </div>
    );

    // return (
    //   <div
    //     className="container bg-info border border-danger  p-5 mt-2">
    //     <button type="button" class="close" aria-label="Close">
    //       <span aria-hidden="true">&times;</span>
    //     </button>
    //     <h3>{this.props.tutorial.Title}</h3>
    //     <hr className="bg-primary" />
    //     <h5>Tutorial Link : <a>{this.props.tutorial.Link}</a></h5>
    //     <div className="row">
    //       <span className="col">
    //         Type of Tutorial : {this.props.tutorial.TypeOfTutorial}
    //       </span>
    //       <t />
    //       <span className="col">
    //         Type of Pay : {this.props.tutorial.TyoeOfPay}
    //       </span>
    //       <t />
    //       <span className="col">
    //         Skill Level : {this.props.tutorial.SkillLevel}
    //       </span>
    //       <t />
    //     </div>
    //     <label className="badge badge-pill badge-warning">
    //       {this.props.tutorial.Tag}
    //     </label>
    //     <button
    //       type="button"
    //       className="btn-primary float-right"
    //       onClick={this.changeFav}
    //     >
    //       {this.state.btnVale}
    //     </button>
    //     {/* <Profile {}/> */}
    //   </div>
    // );
  }
}
