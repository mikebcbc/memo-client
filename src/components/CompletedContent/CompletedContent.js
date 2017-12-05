import React, { Component } from 'react';

import './CompletedContent.css';

export default class CompletedContent extends Component {
  render() {
    return (
      <div className="completed-content">
      	<h3>Completed Content</h3>
      	<div className="card-container">
	        <div className="card">
	        	<span className="site-title">Medium</span>
	        	<hr />
	        	<span className="content-title">Using CSS Flexbox</span>
	        	<span className="time-spent">180 minutes spent</span>
	        </div>
	        <div className="card">
	        	<span className="site-title">Youtube</span>
	        	<hr />
	        	<span className="content-title">CSS Grid vs. CSS Flexbox</span>
	        	<span className="time-spent">23 minutes spent</span>
	        </div>
	        <div className="card">
	        	<span className="site-title">StackOverflow</span>
	        	<hr />
	        	<span className="content-title">How to correctly configure webpack?</span>
	        	<span className="time-spent">18 minutes spent</span>
	        </div>
	        <div className="card">
	        	<span className="site-title">Medium</span>
	        	<hr />
	        	<span className="content-title">Using CSS Flexbox</span>
	        	<span className="time-spent">180 minutes spent</span>
	        </div>
	    	</div>
      </div>
    )
  }
}
