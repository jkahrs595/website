import React, { Component } from 'react';
import {NavbarInstance} from './nav/navbarInstance';
import {Home} from './home/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarInstance />
          <Home/>
      </div>
    );
  }
}

export default App;
