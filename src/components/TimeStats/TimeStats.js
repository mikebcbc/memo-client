import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';

export class TimeStats extends Component {
  render() {
    const data = {
      labels: this.props.timeSpent.map((time) => time.day),
      datasets: [
        {
          label: 'Time Spent (minutes)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.timeSpent.map((time) => time.time)
        }
      ]
    };
    return (
      <div className="timestats">
        <Line data={data} options={{maintainAspectRatio: true}} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeSpent: state.memo.timeSpent
})

export default connect(mapStateToProps)(TimeStats);