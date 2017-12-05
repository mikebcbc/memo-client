import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRec} from '../../actions';

import './RecContent.css';

export class RecContent extends Component {
	componentWillMount() {
		this.props.dispatch(fetchRec(this.props.authToken));
	}

  render() {
  	const listContent = this.props.content.map((item, index) => <li key={index}><span className="topic-tag">{item.related_topic.name}</span> <span className="site-tag">[{item.site}] </span><a href={item.link}>{item.title}</a></li>);
    return (
	    <div className="recommended-content">
	    	<h3>Recommended Content</h3>
		    <ul className="content-list">
		    	{listContent}
				</ul>
			</div>
    )
  }
}

const mapStateToProps = state => ({
	content: state.memo.content,
	authToken: state.memo.authToken
});

export default connect(mapStateToProps)(RecContent);