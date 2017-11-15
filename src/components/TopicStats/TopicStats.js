import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'NodeJS',
		'ReactJS',
		'Design'
	],
	datasets: [{
		data: [2, 18, 9],
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

export default class TopicStats extends Component {
  render() {
    return (
      <div className="topicstats">
        <Doughnut data={data} options={{maintainAspectRatio: true}} />
      </div>
    )
  }
}
