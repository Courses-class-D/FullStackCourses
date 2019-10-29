import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Tabs, Row } from "antd";
import Navbar from "./Navbar";
import moment from "moment";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      user_id: "",
      errors: {},
      tutorials: [],
      Favourites: []
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      user_id: decoded._id
    });
    this.getFav();
  }

  filterID = () => {
    axios
      .get(`http://localhost:9000/filterId/${this.state.user_id}`)
      .then(res => {
        const tutorials = res.data;
        this.setState({ tutorials });
      });
  };

  delete = ID => {
    axios.delete(`http://localhost:9000/deleteTut/${ID}`).then(res => {
      const Tutorials = res.data;
    });
  };

  getFav = () => {
    axios.get(`http://localhost:9000/getFav`).then(res => {
      const Favourites = res.data;
      Favourites.map(Favourite => {
        let ID = Favourite.tutorial_id;
        axios.get(`http://localhost:9000/getFavTut/${ID}`).then(res => {
          const Favourites = res.data;
          this.setState({ Favourites });
          console.log("ID :", ID);
        });
      });
    });
  };

  deleteFav = ID => {
    console.log(ID);
    axios.delete(`http://localhost:9000/deleteFav/${ID}`).then(res => {
      const Favourites = res.data;
      window.location.reload();
    });
  };

  render() {
    const mystyle = {
      display: "block",
      transform: "translate3d(316px, 0px, 0px)",
      width: "152px"
    };

    const { first_name, last_name, email } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: "20%" }}>
          {/* <div className="jumbotron mt-5 bg-primary">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">{first_name + " " + last_name}</h1>
              <center>{email}</center>
            </div>
          </div>
          <Link
            to={{
              pathname: `Add/${this.state.user_id}`
            }}
          >
            <button>Add tutorial</button>
          </Link> */}
          <div class="modal-body">
            <center>
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Robot-512.png"
                name="aboutme"
                width="140"
                height="140"
                border="0"
                class="rounded-circle"
              />
              <h3 class="media-heading">{first_name + " " + last_name}</h3>

              <Link
                to={{
                  pathname: `Add/${this.state.user_id}`
                }}
              >
                <button
                  type="button"
                  class="btn btn-outline-primary  waves-effect"
                >
                  Add Tutorials
                </button>
              </Link>
            </center>
          </div>
          <hr />
          <Tabs defaultActiveKey="1" size="large">
            <Tabs.TabPane tab="Favorites" key="1" className="tab-content">
              <Row gutter={8}>
                {this.state.Favourites.map(Favourite => {
                  return (
                    <div className=" container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded  p-5 mt-2 ">
                      <h3 className="favth-panel-heading">{Favourite.Title}</h3>
                      <hr className="bg-primary" />
                      <h5>
                        Tutorial Link : <a>{Favourite.Link}</a>
                      </h5>
                      <div className="favth-panel-body row">
                        <span className="col">
                          Type of Tutorial : {Favourite.TypeOfTutorial}
                        </span>
                        <t />
                        <span className="col">
                          Type of Pay : {Favourite.TyoeOfPay}
                        </span>
                        <t />
                        <span className="col">
                          Skill Level : {Favourite.SkillLevel}
                        </span>
                        <button
                          type="button"
                          className="btn-primary float-right"
                          aria-label="Close"
                          onClick={() => this.deleteFav(Favourite._id)}
                        >
                          Delete From Favourites
                        </button>
                      </div>
                      <label className="badge badge-pill badge-warning">
                        {Favourite.Tag}
                      </label>
                    </div>
                  );
                })}
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              onClick={this.filterID()}
              tab="Submitted Tutorials"
              key="2"
              className="tab-content"
            >
              <Row gutter={8}>
                {this.state.tutorials.map(tutorial => {
                  return (
                    <div className=" container bg-light text-dark border rounded shadow p-3 mb-5 bg-white rounded  p-5 mt-2 ">
                      <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={() => this.delete(tutorial._id)}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h3 className="favth-panel-heading">{tutorial.Title}</h3>
                      <hr className="bg-primary" />
                      <h5>
                        Visit Tutorial :{" "}
                        <a href={tutorial.Link}>{tutorial.Link}</a>
                      </h5>
                      <div className="favth-panel-body row">
                        <span className="col">
                          Type of Tutorial : {tutorial.TypeOfTutorial}
                        </span>
                        <t />
                        <span className="col">
                          Type of Pay : {tutorial.TyoeOfPay}
                        </span>
                        <t />
                        <span className="col">
                          Skill Level : {tutorial.SkillLevel}
                        </span>
                        <t />
                        <span>
                          Submitted On :{" "}
                          {moment(tutorial.submittedOn).format("MMMM D, YYYY")}
                        </span>
                      </div>
                      <label className="badge badge-pill badge-warning">
                        {tutorial.Tag}
                      </label>
                    </div>
                  );
                })}
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Profile;
