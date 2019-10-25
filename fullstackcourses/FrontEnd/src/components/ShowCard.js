import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class ShowCard extends Component {
  state = {
    btnVale: "Add To Favourite"
  }
  cardClicked = title => {
    console.log("titleeeeee :", title);
    this.props.filter(title);
  };
  changeFav = btnVale => {
    //  this.setState({btnVale})
    if (this.state.btnVale === "Add To Favourite") {
      this.setState({ btnVale: "Remove From Favourite" });
    } else if (this.state.btnVale === "Remove From Favourite") {
      this.setState({ btnVale: "Add To Favourite" });
    }
  };
  render() {
    const { tags } = this.props;
    return (
      <div className=" container-fluid card-deck view overlay"   style={{paddingTop:" 50px"}}  >
        
        {tags.map(tag => {
          return (
            <div
              key={tag._id}
              className="card mask flex-center rgba-blue-ligh border-primary shadow-sm p-3 mb-5 bg-white rounded"
              onClick={() => this.cardClicked(tag.label)}
            >
              <div className="card-body md-3">
                <h5 className="card-title">{tag.label}</h5>
                <hr className="bg-primary" />
                <p>Official Website : </p><a href={tag.tagLink}>{tag.tagLink}</a>
              </div>
            </div>
          );
        })}

        {/* Filtering */}
        {this.props.tutorial.map(tutorial => {
          return (
            <div className=" container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded  p-5 mt-2 ">
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 className="favth-panel-heading">{tutorial.Title}</h3>
              <hr className="bg-primary" />
              <div className="favth-panel-body row">
                <span className="col">
                  Type of Tutorial : {tutorial.TypeOfTutorial}
                </span>
                <t />
                <span className="col">Type of Pay : {tutorial.TyoeOfPay}</span>
                <t />
                <span className="col">Skill Level : {tutorial.SkillLevel}</span>
                <t />
              </div>
              <label className="badge badge-pill badge-warning">
                {tutorial.Tag}
              </label>
              <button type="button" className="btn-primary float-right"onClick={this.changeFav}>
              {this.state.btnVale} 
              </button>
            </div>
          );
        })}

      </div>
    );
  }
}
