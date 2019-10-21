import React, { Component } from 'react';


export default class App extends Component {
state= {
  tutorials :[
    {
        id : 1,
        Title:"Androis Tutorial",
        Link: "https://www.tutorialspoint.com/android/index.htm",
        Description:"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers",
        Tags:"Android",
        TypeOfTutorial:"Video",
        TyoeOfPay:"Free",
        SkillLevel:"Beginner"
    },
    {
      id : 1,
      Title:"PHP Tutorial",
      Link: "https://www.w3schools.com/php/",
      Description:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",
      Tags:"PHP",
      TypeOfTutorial:"Video",
      TyoeOfPay:"Free",
      SkillLevel:"Intermediate"
    },
    {
      
      id : 1,
      Title:"Laravel Tutorial",
      Link: "https://laravel-news.com/your-first-laravel-application",
      Description:"Laravel focuses on the end user first, which means its focus is on simplicity, clarity, and getting work done",
      Tags:"Laravel",
      TypeOfTutorial:"Video",
      TyoeOfPay:"Free",
      SkillLevel:"Advanced"
    }
  ]
}

  render(){

    return (
      <>
       
      </>
    );
  }
  
  
}

