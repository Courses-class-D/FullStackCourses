import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ShowCard from './ShowCard';
import Navbar from './Navbar';

export default class cards extends Component {

    state = {
        tutorials: [
          {
            id: 1,
            Title: "Android Tutorial",
            Link: "https://www.tutorialspoint.com/android/index.htm",
            Description: "Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers",
            Tags: "Android",
            TypeOfTutorial: "Video",
            TyoeOfPay: "Free",
            SkillLevel: "Beginner"
          },
          {
            id: 2,
            Title: "PHP Tutorial",
            Link: "https://www.w3schools.com/php/",
            Description: "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",
            Tags: "PHP",
            TypeOfTutorial: "Video",
            TyoeOfPay: "Free",
            SkillLevel: "Intermediate"
          },
          {
    
            id: 3,
            Title: "Laravel Tutorial",
            Link: "https://laravel-news.com/your-first-laravel-application",
            Description: "Laravel focuses on the end user first, which means its focus is on simplicity, clarity, and getting work done",
            Tags: "Laravel",
            TypeOfTutorial: "Video",
            TyoeOfPay: "Free",
            SkillLevel: "Advanced"
          },
          {
    
            id: 4,
            Title: "Angular Tutorial",
            Link: "https://angular.io",
            Description: "Angular is a TypeScript-based open-source front-end web application platform",
            Tags: "Angular",
            TypeOfTutorial: "Video",
            TyoeOfPay: "Free",
            SkillLevel: "Advanced"
          }
        ]
      }
    render() {
        const { tutorials } = this.state;
        return (
          <Router>
            <Navbar/>
            <br/>
            <div>
              <ShowCard tutorials={tutorials} />
            </div>
          </Router>
    
        );
    }
}
