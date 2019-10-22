import React, { Component } from 'react';
import Add from "./Add/Add"

import {
  BrowserRouter ,
  // HashRouter,
  Route,
  Link
} from "react-router-dom";


export default class App extends Component {
    render(){
      return(
        <div>
          <Add/>
        </div>
      )
    }
  
}