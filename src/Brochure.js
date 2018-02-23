import React from 'react';
import Sitenavbar from './Components/Sitenavbar'
import './App.css'
import './Brochure.css'

const Brochure = () => {
  return(
    <div className="App">
      <Sitenavbar />
      <h1>React Hacker News</h1>
      <h3>What the App Does</h3>
      <p>Using the <a href="https://github.com/HackerNews/API">Hacker News API</a> you can go to either Top, Best, or New Stories</p>
      <p>App is built using ReactJS</p>
    </div>
  );
}

export default Brochure;