import React, { Component } from 'react'
import './App.css';
import Game from './Game'
import Demo from './Demo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Game />
        </div>
        <div>
          <Demo />
        </div>

      </div>)


  }
}

export default App;
