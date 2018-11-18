import React from "react";
import logo from '../../logo.svg';
import '../../App.css';

import NameCard from '../NameCard';
import LikesButton from '../LikesButton';
import DigitalClock from '../DigitalClock'
import CommentBox from '../CommentBox'

const tags = ['空灵', '神经质']

const Home = () => {
    return (
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
    );

};
export default Home;