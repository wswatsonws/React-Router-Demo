import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';

import Home from './components/router/Home';
import Login from './components/router/Login';
import Register from './components/router/Register';
import Error from './components/router/Error';
import Navigation from './components/router/Navigation';



class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home}  exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Error} />
         
        </Switch>
        </div>
        

      </BrowserRouter>
      /*
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
      
            </a>
          </header>
          <a>dsafasd</a>
          <NameCard name="Watson" number={34567890} isHuman tags={tags} />
          <LikesButton  />
          <DigitalClock />
        <CommentBox />

        
        
        </div>
        */
        
      
    );
  }
}

export default App;
