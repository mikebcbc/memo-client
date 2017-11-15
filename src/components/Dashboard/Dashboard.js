import React, { Component } from 'react';

import Stats from '../Stats/Stats';
import RecContent from '../RecContent/RecContent';
import ManualEntry from '../ManualEntry/ManualEntry';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Stats />
        <RecContent />
        <ManualEntry />
      </div>
    )
  }
}
