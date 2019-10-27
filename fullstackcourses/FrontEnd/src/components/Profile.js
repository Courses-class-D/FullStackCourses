import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import axios from "axios"
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Tabs, Row } from "antd";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      user_id: "",
      errors: {},
      tutorials:[],
          btnVale: "Add To Favourite"

    };
  }

  changeFav = btnVale => {
    //  this.setState({btnVale})
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
    axios.get(`http://localhost:9000/filterId/${this.state.user_id}`).then(res => {
      const tutorials = res.data;
      this.setState({ tutorials });
    });
  }

  render() {
    const mystyle = {
      display: "block",
      transform: "translate3d(316px, 0px, 0px)",
      width: "152px"
    };
    //const videos=this.props.
    const { first_name, last_name, email } = this.state;
    return (
      <div className="container">
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
        {/* <div className="ant-tabs-nav-scroll">
          <div className="ant-tabs-nav ant-tabs-nav-animated">
            <div>

              <div role="tab" aria-disabled="false" aria-selected="false" className=" ant-tabs-tab">Favorites
            </div>
              <div role="tab" aria-disabled="false" aria-selected="false" className=" ant-tabs-tab">Submitted Videos
              </div><div role="tab" aria-disabled="false" aria-selected="true" className="ant-tabs-tab-active ant-tabs-tab">Submitted Blogs
              </div></div>
              <div className="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style={mystyle}>
                </div></div>
        </div> */}
        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Favorites" key="1" className="tab-content">
            <Row gutter={8}>favorites</Row>
          </Tabs.TabPane>
          <Tabs.TabPane onClick={this.filterID()} tab="Submitted Tutorials" key="2" className="tab-content">
            <Row gutter={8}>
            {this.state.tutorials.map(tutorial => {
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

            </Row>
          </Tabs.TabPane>
          {/* <Tabs.TabPane tab="Submitted Blogs" key="3" className="tab-content">
            <Row gutter={8}>submittedBlogs</Row>
          </Tabs.TabPane> */}
        </Tabs>
      </div>
    );
  }
}

export default Profile;
