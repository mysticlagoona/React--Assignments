import React, { Component } from 'react';
import logo from './image/y18.gif';
import './App.css';
import Header from './Header';
import  Article from './Article';
 
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
  
  render() {
    return (
      
      <div>
            <Header />
      <div  className="itemlist" className="container">
            <Article />
        </div>
      </div>
    );
  }
}

export default App;