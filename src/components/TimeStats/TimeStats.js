import React, { Component } from 'react';

export default class TimeStats extends Component {
  render() {
    return (
      <div className="timestats">
        { this.props.children }
      </div>
    )
  }
}
