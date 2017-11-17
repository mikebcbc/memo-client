import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

export class TopicStats extends Component {
  render() {
		const data = {
			labels: this.props.topics.map((topic) => {
				let rArr = [];
				rArr.push(topic.label);
				return rArr;
			}),
			datasets: [{
				data: this.props.topics.map((topic) => {
				let rArr = [];
				rArr.push(topic.range);
				return rArr;
			}),
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

    return (
      <div className="topicstats">
        <Doughnut data={data} options={{maintainAspectRatio: true}} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topics: state.memo.topics
})

export default connect(mapStateToProps)(TopicStats);