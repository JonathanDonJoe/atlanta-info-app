import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import Home from './Home';
import About from './About';
import Images from './Images'

import MayorMessage from './MayorMessage';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      // <div>
      //   <BootstrapNavBar />
      //   <div className="container main">
      //     <h1>Main App</h1>
      //   </div>
      // </div>
      <Router>
          <br/>
          <br/>
          <br/>
        <Route path='/' component={BootstrapNavBar}></Route>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/images' component={Images}></Route>
        <Route path='/mayor' component={MayorMessage}></Route>

      </Router>

    );
  }
}

export default App;
