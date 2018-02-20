import React, {Component} from 'react';
import Sitenavbar from './Components/Sitenavbar'
import './App.css'

class NewStories extends Component {
  render() {
    return(
      <div className="App">
        <Sitenavbar />
        <h1>Hacker News New Stories</h1>
      </div>
    );
  }
}

export default NewStories;