import React, { Component } from 'react';
import './App.css';
import Sitenavbar from './Components/Sitenavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sitenavbar />
        <h1>Hacker News Top Stories</h1>
      </div>
    );
  }
}

export default App;
