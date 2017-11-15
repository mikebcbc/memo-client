import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'YouTube',
		'Medium',
		'StackOverflow'
	],
	datasets: [{
		data: [18, 5, 12],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class SiteStats extends Component {
  render() {
    return (
      <div className="sitestats">
      	<Pie data={data} options={{maintainAspectRatio: true}} />
      </div>
    )
  }
}
