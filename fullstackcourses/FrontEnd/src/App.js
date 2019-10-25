import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Add from "./Add/Add"


// import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Show from "./components/Show"


export default class App extends Component {


  render(){

    return (
      <>
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <div className="container">
          <Route exact path="/Add" component={Add} /> 
          <Route exact path="/Show" component={Show} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </div>
    </Router>
    {/* <Show /> */}
    
    </>
    );
  }
  
  
}

