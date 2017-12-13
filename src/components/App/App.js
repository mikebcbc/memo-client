import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';
import {refreshToken} from '../../actions';

import './App.css';

export class App extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      this.startRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      this.stopRefresh();
    }
  }

  componentWillUnmount() {
    this.stopRefresh();
  }

  startRefresh() {
    this.refreshInterval = setInterval(() => this.props.dispatch(refreshToken()), 3600000);
  }

  stopRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
    	<Router>
    		<div className="app">
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
      		<Route exact path="/register" component={Register} />
      	</div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(App);