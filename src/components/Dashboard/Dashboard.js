import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchUser} from '../../actions';

import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Content from '../Content/Content';
import ManualEntry from '../ManualEntry/ManualEntry';

export class Dashboard extends Component {
  componentDidMount() { // How to do only once?
    if(this.props.loggedIn) {
      this.props.dispatch(fetchUser(this.props.authToken));
    }
  }

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
  authToken: state.memo.authToken,
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Dashboard);