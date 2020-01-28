import React, { useState, useEffect } from 'react';
import { getHourlyStats, getPoi } from '../actions';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import _ from 'lodash';
import './HourlyStats.css';

function HourlyStats(props) {
	const [category, setCategory] = useState('revenue');

	useEffect(() => {
		props.getHourlyStats();
		props.getPoi();
	}, []);

	var obj = {};

	for (let item in props.hourlyStats) {
		let event = props.hourlyStats[item];
		if (!obj[event.poi_id]) {
			obj = { ...obj, [event.poi_id]: [event] };

			console.log('initial add', obj);
		} else {
			obj[event.poi_id].push(event);

			//console.log(event.poi_id, event, dataSets);
		}
	}
	console.log(obj);

	var dataSets = [];

	for (let data in obj) {
		dataSets.push({
			label: obj[data][0].name,
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: _.map(obj[data], category)
		});
	}

	var data = {
		labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
		datasets: dataSets
	};
	let count = 0;
	return (
		<div
			onClick={() => {
				switch (category) {
					case 'revenue':
						setCategory('clicks');
						break;
					case 'clicks':
						setCategory('impressions');
						break;
					case 'impressions':
						setCategory('revenue');
						break;
					default:
						setCategory('revenue');
						break;
				}
			}}>
			)<h2 className="title">{category} per hour</h2>
			<div>
				<Line data={data} width={100} height={200} options={{ maintainAspectRatio: false }}></Line>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		hourlyStats: state.hourlyStats,
		poi: state.poi
	};
};

export default connect(mapStateToProps, { getHourlyStats, getPoi })(HourlyStats);
