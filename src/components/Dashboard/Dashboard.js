import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import io from 'socket.io-client';
import {fetchUser, acceptExtension} from '../../actions';

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

  render() {
    const socket = io.connect(`https://secret-island-23486.herokuapp.com`, {query: `auth_token=${this.props.authToken}`}); // This goes off twice. Tried constructor. User object not accessible.
    socket.on('reloadState', (content) => {
      this.props.dispatch(acceptExtension(content, this.props.user, this.props.authToken))
    });

    if(!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

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
  user: state.memo.user,
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Dashboard);