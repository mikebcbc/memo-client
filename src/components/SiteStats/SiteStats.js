import React, { Component } from 'react';

export default class SiteStats extends Component {
  render() {
    return (
      <div className="sitestats">
        { this.props.children }
      </div>
    )
  }
}
