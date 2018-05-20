import React, { Component } from 'react';
import logo from './image/y18.gif';
import './App.css';
import Header from './Header.js';
import  Article from './Article.js';



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Article />
      </div>
    );
  }
}

export default App;