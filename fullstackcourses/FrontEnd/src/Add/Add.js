import React, { Component } from "react";
import AddTutorial from "./AddTutorial";
import AddTag from "./AddTag";
import axios from "axios";

export default class Add extends Component {
  state = {
    tutorials: [],
    tags: [],
    user_Id:""
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
  componentDidMount () {
    this.readTags();
    const { match : {params} } = this.props
    console.log(params.id)
    this.setState({user_Id:params.id});
  }

  addtutorial = tutorial => {
    console.log()
    axios
      .post(`http://localhost:9000/addtutorial`, { tutorial })
      .then(res => {
        this.setState({ tutorials: res.data });
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
        <AddTutorial
          addtutorial={addtutorial}
          tutorials={tutorials}
          tags={tags}
          userID={this.state.user_Id}
        />
        <AddTag addtag={addtag} tags={tags} />
      </>
    );
  }
}
