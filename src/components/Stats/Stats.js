import React, { Component } from 'react';

import TopicStats from '../TopicStats/TopicStats';
import TimeStats from '../TimeStats/TimeStats';
import SiteStats from '../SiteStats/SiteStats';

import './Stats.css';

export default class Stats extends Component {
  render() {
    return (
      <section className="stats">
      	<div className="inner-wrapper">
        	<TopicStats />
        	<TimeStats />
        	<SiteStats />
        </div>
      </section>
    )
  }
}
