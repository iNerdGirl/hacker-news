import React, {Component} from 'react';
import Sitenavbar from './Components/Sitenavbar';
import './App.css'

class BestStories extends Component {
  render() {
    return(
      <div className="App">
        <Sitenavbar />
        <h1>Hacker News Best Stories</h1>
      </div>
    );
  }
}

export default BestStories;