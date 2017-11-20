import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
    	<nav>
    		<ul>
    			<li><Link to="/dashboard">Dashboard</Link></li>
    			<li>Login</li>
    		</ul>
    	</nav>
    )
  }
}
