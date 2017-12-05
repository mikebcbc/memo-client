import React, { Component } from 'react';

import './CompletedContent.css';

export default class CompletedContent extends Component {
  render() {
    return (
      <div className="completed-content">
        <div className="card">
        	<span className="site-title">Medium</span>
        	<hr />
        	<span className="content-title">Using CSS Flexbox</span>
        	<span className="time-spent">180 minutes spent</span>
        </div>
        <div className="card">
        	<span className="site-title">Medium</span>
        	<hr />
        	<span className="content-title">Using CSS Flexbox</span>
        	<span className="time-spent">180 minutes spent</span>
        </div>
        <div className="card">
        	<span className="site-title">Medium</span>
        	<hr />
        	<span className="content-title">Using CSS Flexbox</span>
        	<span className="time-spent">180 minutes spent</span>
        </div>
        <div className="card">
        	<span className="site-title">Medium</span>
        	<hr />
        	<span className="content-title">Using CSS Flexbox</span>
        	<span className="time-spent">180 minutes spent</span>
        </div>
      </div>
    )
  }
}
