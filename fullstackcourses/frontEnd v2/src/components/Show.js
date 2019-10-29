import React, { Component } from 'react';
import axios from 'axios'
import Courses from "./Courses";

export default class Show extends Component {
    state= {
        tutorials :[]
      }
      readTutorials = () => {
        axios.get(`http://localhost:9000/data`).then(res => {
          console.log(res.data);
          const tutorials = res.data;
          this.setState({ tutorials });
        });
      };
    
      componentDidMount() {
        this.readTutorials();
      }

    render() {
        return (
            <div>
                <Courses tutorials={this.state.tutorials} />
            </div>
        )
    }
}
