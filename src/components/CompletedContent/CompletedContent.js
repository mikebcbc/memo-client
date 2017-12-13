import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCompleted} from '../../actions';

import './CompletedContent.css';

export class CompletedContent extends Component {
	componentWillMount() {
		this.props.dispatch(fetchCompleted(this.props.authToken));
	}

  render() {
  	const cards = this.props.completed.map((item, index) => <div className="card" key={index}><span className="site-title">{item.contentId.site}</span><hr /><span className="content-title"><a href={item.contentId.link} target="_blank">{item.contentId.title}</a></span><span className="time-spent">{item.time} minutes spent</span></div>)
    return (
      <div className="completed-content">
      	<h3>Completed Content</h3>
      	<div className="card-container">
	        {cards}
	    	</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
	completed: state.memo.completed,
	authToken: state.memo.authToken
});

export default connect(mapStateToProps)(CompletedContent);