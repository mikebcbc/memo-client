import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Content from '../Content/Content';
import ManualEntry from '../ManualEntry/ManualEntry';

export class Dashboard extends Component {
  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="dashboard">
        <Header />
        <Stats />
        <Content />
        <ManualEntry />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Dashboard);