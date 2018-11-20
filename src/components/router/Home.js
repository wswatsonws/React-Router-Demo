import React, { Component } from 'react';
import logo, { ReactComponent } from '../../logo.svg';
import '../../App.css';

import NameCard from '../NameCard';
import LikesButton from '../LikesButton';
import DigitalClock from '../DigitalClock'
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

const tags = ['空灵', '神经质'];



class Home extends Component{
//const Home = () => {

  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment){
    this.setState({
      comments: [...this.state.comments, comment]
    })

  }

  render(){
    const { comments } = this.state
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
        <CommentList comments={comments} />
       
        <CommentBox  commentsLength={comments.length} onAddComment={this.addComment} />


      
      
      </div>
    );
  }


}
//};
export default Home;