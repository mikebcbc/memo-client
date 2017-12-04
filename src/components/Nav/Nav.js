import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setCurrentUser, setAuthToken} from '../../actions';
import {clearAuthToken} from '../../local-storage';

import './Nav.css';

export class Nav extends Component {
  logOut() {
  	this.props.dispatch(setCurrentUser(null));
  	this.props.dispatch(setAuthToken(null));
  	clearAuthToken();
  }

  render() {
    return (
    	<nav>
    		<ul>
    			<li className="dashboard-link"><Link to="/dashboard">Dashboard</Link></li>
          {
            (this.props.loggedIn)
              ? <li><Link to="/" onClick={() => this.logOut()}>Logout</Link></li>
              : <li><Link to="/login">Login</Link></li>
          }
    		</ul>
    	</nav>
    )
  }
};

const mapStateToProps = state => ({
	loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Nav);