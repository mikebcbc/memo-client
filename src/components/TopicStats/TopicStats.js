import React, { Component } from 'react';

export default class TopicStats extends Component {
  render() {
    return (
      <div className="topicstats">
        { this.props.children }
      </div>
    )
  }
}
