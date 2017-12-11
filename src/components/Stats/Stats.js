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
          <div className="stats-container">
            <div className="section-left">
              <TimeStats />
              <hr />
              <SiteStats />
            </div>
            <div className="section-right">
              <TopicStats />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
