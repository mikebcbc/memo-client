import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
    	<nav>
    		<ul>
    			<li className="dashboard-link"><Link to="/dashboard">Dashboard</Link></li>
    		</ul>
    	</nav>
    )
  }
}
