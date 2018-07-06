import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
