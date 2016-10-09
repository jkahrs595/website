import React, { Component } from 'react';
import {NavbarInstance} from './nav/NavbarInstance';
import {Home} from './home/Home'
import {Projects} from './projects/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarInstance />
          <Home/>
          <Projects/>
      </div>
    );
  }
}

export default App;
