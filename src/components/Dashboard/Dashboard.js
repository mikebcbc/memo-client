import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import io from 'socket.io-client';
import {fetchUser} from '../../actions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Stats from '../Stats/Stats';
import Content from '../Content/Content';
import ManualEntry from '../ManualEntry/ManualEntry';

import './Dashboard.css';

export class Dashboard extends Component {
  componentWillMount() {
    if(this.props.loggedIn) {
      this.props.dispatch(fetchUser(this.props.authToken));
    }
  }

  componentDidUpdate() { //This right?
    if(this.props.loggedIn) {
      this.props.dispatch(fetchUser(this.props.authToken));
    }
  }

  render() {
    if(!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    const socket = io.connect('http://localhost:3001', {query: `auth_token=${this.props.authToken}`});

    socket.on('reloadState', () => {
      console.log('triggered');
      this.forceUpdate();
    });

    return (
      <div className="dashboard">
        <Header />
        <Stats />
        <Content />
        <ManualEntry />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authToken: state.memo.authToken,
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Dashboard);