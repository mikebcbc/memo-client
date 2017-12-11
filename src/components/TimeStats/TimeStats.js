import React, { Component } from 'react';
import {connect} from 'react-redux';
import CountUp from 'react-countup';

import './TimeStats.css';

export class TimeStats extends Component {
  render() {
    return (
      <div className="timestats">
        <CountUp className="time-spent" start={0} end={this.props.timeSpent} useGrouping={true} separator="," suffix="<span class='suffix'>minutes spent learning</span>" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeSpent: state.memo.timeSpent
})

export default connect(mapStateToProps)(TimeStats);