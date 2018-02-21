import React, {Component} from 'react';
import Sitenavbar from './Components/Sitenavbar'
import './App.css';

class Brochure extends Component {
  render() {
    return(
      <div>
        <Sitenavbar />
        <h1>Hello from Brochure</h1>
      </div>
    );
  }
}

export default Brochure;