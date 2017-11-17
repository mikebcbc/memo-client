import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import {connect} from 'react-redux';

export class SiteStats extends Component {
  render() {
  	const data = {
			labels: this.props.sites.map((site) => {
				let rArr = [];
				rArr.push(site.label);
				return rArr;
			}),
			datasets: [{
				data: this.props.sites.map((site) => {
					let rArr = [];
					rArr.push(site.range);
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
      <div className="sitestats">
      	<Pie data={data} options={{maintainAspectRatio: true}} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
	sites: state.memo.sites
});

export default connect(mapStateToProps)(SiteStats);