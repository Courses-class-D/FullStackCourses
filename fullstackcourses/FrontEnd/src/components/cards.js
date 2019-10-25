import React, { Component } from "react";
import axios from "axios";
import ShowCard from "./ShowCard";

export default class cards extends Component {
  state = {
    tutorial: [],
    tags: []
  };

  readTags = () => {
    axios.get(`http://localhost:9000/tagsData`).then(res => {
      const tags = res.data;
      this.setState({ tags });
    });
  };

  componentDidMount() {
    this.readTags();
  }

  filter = (title) => {
    axios.get(`http://localhost:9000/filter/${title}`).then(res => {
      const tutorial = res.data;
      this.setState({ tutorial });
      console.log("tttttttt", this.state.tutorial);
    });
  };

  render() {
    const { tags } = this.state;
    return (
        <div>
          <ShowCard filter={this.filter} tags={tags} tutorial={this.state.tutorial} />
        </div>
    );
  }
}
