import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PopularContainer from './components/PopularContainer';
import FeaturedContainer from './components/FeaturedContainer';
import { SUBREDDIT_API_BASE } from './requests';


class App extends React.Component {
  // PRE ES6 SYNTAX 
  // constructor(){
  //   super();
  //   this.state = {
  //   }
  // }

  // ES6 
  state = {
    subreddits: []
  }

  fetchSubreddits = () => {
    fetch(SUBREDDIT_API_BASE)
      .then(res => res.json())
      .then(data => this.setState({ subreddits: data }))
  }


  render() {
    console.log('APP STATE: ', this.state)
    return (
      <div className="App">
        <Navbar />
        <button onClick={this.fetchSubreddits}>Get Subreddits</button>
        <div className="simple-flex-row">
          <PopularContainer subreddits={this.state.subreddits}/>
          <FeaturedContainer subreddits={this.state.subreddits}/>
        </div>
      </div>
    );
  }
}

export default App;
