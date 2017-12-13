import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
    	<div className="landing">
				<Header />
      	<section className="hero-section">
        	<h2>A free, intuitive way to manage your self-learning.</h2>
	      </section>
	      <section className="how-it-works">
	      	<div className="inner-wrapper">
	      		<h3 className="how-title">How it works</h3>
	      		<div className="hiw-row">
		      		<div className="hiw-box step-1">
		      			<span className="number-bubble">1</span>
		      			<p className="sub-text">Create an account and start sifting through recommended beginner's (or advanced!) content.</p>
		      		</div>
							<div className="hiw-box step-2">
		      			<span className="number-bubble">2</span>
		      			<p className="sub-text">Download our <a href="https://chrome.google.com/webstore/detail/memo-extension/jbejflnikmmhgdhmliiehpjlkpgejdkc" target="_blank" rel="noopener noreferrer">free Chrome Extension</a> to automatically record and complete videos, articles, etc.</p>
		      		</div>
							<div className="hiw-box step-3">
		      			<span className="number-bubble">3</span>
		      			<p className="sub-text">Dynamically see real-time statistics of topic range, site range, total time spent, and more in our dashboard. </p>
		      		</div>
		      	</div>
	      	</div>
	      </section>
	      <section className="cta">
	      	<div className="inner-wrapper">
	      		<div className="cta-box">
	      			<div className="section-left"></div>
	      			<div className="section-right">
		      			<h3>Ready to get started?</h3>
		      			<p>Sign up today and start taking control of your schoolwork.</p>
		      			<button><Link to="/register">Register Today</Link></button>
		      		</div>
	      		</div>
	      	</div>
	      </section>
	      <Footer />
	    </div>
    )
  }
}
