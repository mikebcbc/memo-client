import React, { Component } from 'react';

import Stats from '../Stats/Stats';
import Content from '../Content/Content';
import ManualEntry from '../ManualEntry/ManualEntry';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Stats />
        <Content />
        <ManualEntry />
      </div>
    )
  }
}
