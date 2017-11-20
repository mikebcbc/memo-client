import React, { Component } from 'react';
import {connect} from 'react-redux';

import './RecContent.css';

export class RecContent extends Component {
  render() {
  	const listContent = this.props.content.map((item, index) => <li key={index}>{item.topic} - {item.link}</li>);
    return (
	    <ul className="recommended-content">
	    	{listContent}
			</ul>
    )
  }
}

const mapStateToProps = state => ({
	content: state.memo.content
});

export default connect(mapStateToProps)(RecContent);