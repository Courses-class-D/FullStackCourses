import React, { Component } from "react";
import AddTutorial from "./AddTutorial";
import AddTag from "./AddTag";
import axios from "axios";
import Navbar from "../components/Navbar";

export default class Add extends Component {
  state = {
    tutorials: [],
    tags: [],
    user_Id: ""
  };

  readTags = () => {
    axios.get(`http://localhost:9000/tagsData`).then(res => {
      const tags = res.data;
      this.setState({ tags });
    });
  };

  // componentDidMount() {
  //   this.readTags();
  // }
  componentDidMount() {
    this.readTags();
    const {
      match: { params }
    } = this.props;
    console.log(params.id);
    this.setState({ user_Id: params.id });
  }

  addtutorial = tutorial => {
    console.log();
    axios
      .post(`http://localhost:9000/addtutorial`, { tutorial })
      .then(res => {
        this.setState({ tutorials: res.data });
        alert("Added Successfully !!")
        
        this.readTutorials();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  addtag = tag => {
    axios
      .post(`http://localhost:9000/addTag`, tag)
      .then(res => {
        
        this.setState({ tags: res.data });
        alert("Added Successfully !!")

      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.user_Id);

    const { addtutorial, addtag } = this;
    const { tutorials, tags } = this.state;
    return (
      <>
      <div>
         <Navbar/>
       
      <div className="container" style={{marginTop:"20%"}}>
        <AddTutorial
          addtutorial={addtutorial}
          tutorials={tutorials}
          tags={tags}
          userID={this.state.user_Id}
        />
        <AddTag addtag={addtag} tags={tags} />
        </div>
        </div>
      </>
    );
  }
}
