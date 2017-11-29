import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="app">
      		<Header />
          <Route exact path="/" component={Landing} />
      		<Route exact path="/dashboard" component={Dashboard} />
      	</div>
      </Router>
    );
  }
}

export default App;
