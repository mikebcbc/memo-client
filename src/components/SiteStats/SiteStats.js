import React, { Component } from 'react';
import {connect} from 'react-redux';

import './SiteStats.css';

export class SiteStats extends Component {
  render() {
		const sites = this.props.sites.map((site, index) => {
			return <li key={index}><span className="site-title">{site.label}</span>: <span className="site-number">{site.range}</span></li>
		});

    return (
      <div className="sitestats">
      	<ul className="site-list">
      		{sites}
      	</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
	sites: state.memo.sites
});

export default connect(mapStateToProps)(SiteStats);