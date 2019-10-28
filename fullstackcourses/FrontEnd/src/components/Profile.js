import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Tabs, Row } from "antd";
import Navbar from "./Navbar";

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
      btnVale: "Add To Favourite"
    };
  }

  changeFav = btnVale => {
    if (this.state.btnVale === "Add To Favourite") {
      this.setState({ btnVale: "Remove" });
    } else if (this.state.btnVale === "Remove") {
      this.setState({ btnVale: "Add To Favourite" });
    }
  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      user_id: decoded._id
    });
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
    axios.delete(`http://localhost:9000/delete/${ID}`).then(res => {
      const tutorials = res.data;
      console.log(tutorials)
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
        <div className="container" style={{ marginTop: "25%" }}>
          <div className="jumbotron mt-5 bg-primary">
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
          </Link>
          <hr />
          <Tabs defaultActiveKey="1" size="large">
            <Tabs.TabPane tab="Favorites" key="1" className="tab-content">
              <Row gutter={8}>favorites</Row>
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
                        Tutorial Link : <a>{tutorial.Link}</a>
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
                      </div>
                      <label className="badge badge-pill badge-warning">
                        {tutorial.Tag}
                      </label>
                      <button
                        type="button"
                        className="btn-primary float-right"
                        onClick={this.changeFav}
                      >
                        {this.state.btnVale}
                      </button>
                    </div>
                  );
                })}
              </Row>
            </Tabs.TabPane>
            {/* <Tabs.TabPane tab="Submitted Blogs" key="3" className="tab-content">
            <Row gutter={8}>submittedBlogs</Row>
          </Tabs.TabPane> */}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Profile;
