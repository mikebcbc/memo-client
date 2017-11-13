import React, { Component } from 'react';

import Nav from '../Nav/Nav';

export default class Header extends Component {
  render() {
    return (
    	<div className="header">
    		<h1 className="logo">Memo</h1>
      	<Nav />
      </div>
    )
  }
}
