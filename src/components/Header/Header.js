import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Nav from '../Nav/Nav';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
    	<header className="top-section">
    		<h1 className="logo"><Link to="/">Memo</Link></h1>
      	<Nav />
      </header>
    )
  }
}
