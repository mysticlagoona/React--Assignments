import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  as Router, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import New from './Components/New';
import Show from './Components/Show';
import Ask from './Components/Ask';
import Jobs from './Components/Jobs';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={New} />
          <Route exact path="/show" component={Show} />
          <Route exact path="/ask" component={Ask} />
          <Route exact path="/jobs" component={Jobs} />
        </Grid>
      </Router>

    );
  }
}

export default App;
