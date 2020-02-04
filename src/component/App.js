import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyEventsChart from './DailyEventsChart';
import DailyStatsChart from './DailyStats';
import DataTable from './DataTable';
import { getHourlyEvents, getHourlyStats } from '../actions/';
import GeoStats from './GeoStats';
import HourlyStats from './HourlyStats';
import { connect } from 'react-redux';
import { getPoi } from '../actions';
import CompleteMap from './CompleteMap';
import dotenv from 'dotenv';
import { Button } from 'antd';
dotenv.config();
console.log('LOOK HERE', process.env);
function App(props) {
	useEffect(() => {
		props.getPoi();
	}, []);
	const [eventsChart, setEventsChart] = useState(false);
	const [statsChart, setStatsChart] = useState(false);
	const [hourlyStats, setHourlyStats] = useState(false);
	const [dataTable, setDataTable] = useState(false);
	const [completeMap, setCompleteMap] = useState(false);

	return (
		<div>
			<h1>Project Showcase</h1>
			<Button
				type='primary'
				onClick={() => {
					setEventsChart(!eventsChart);
				}}>
				{eventsChart ? 'Hide Events Chart (2a-A)' : 'Show Events Chart (2a-A)'}
			</Button>

			{eventsChart && <DailyEventsChart />}
			<br></br>
			<br></br>
			<Button
				type='primary'
				onClick={() => {
					setStatsChart(!statsChart);
				}}>
				{statsChart ? 'Hide Stats Chart (2a-A)' : 'Show Stats Chart (2a-A)'}
			</Button>
			{statsChart && <DailyStatsChart />}
			<br></br>
			<br></br>
			<Button
				type='primary'
				onClick={() => {
					setHourlyStats(!hourlyStats);
				}}>
				{hourlyStats ? 'Hide Hourly Stats Chart (2a-A)' : 'Show Hourly Stats Chart (2a-A)'}
			</Button>
			{hourlyStats && <HourlyStats />}
			<br></br>
			<br></br>
			<Button
				type='primary'
				onClick={() => {
					setDataTable(!dataTable);
				}}>
				{dataTable ? 'Hide DataTable (2a-B)' : 'Show DataTable (2a-B)'}
			</Button>
			{dataTable && <DataTable />}

			<br></br>
			<br></br>
			<Button
				type='primary'
				onClick={() => {
					setCompleteMap(!completeMap);
				}}>
				{completeMap ? 'Hide Map (2a-C)' : 'Show Map (2a-C)'}
			</Button>
			{completeMap && <CompleteMap />}
		</div>
	);
}

export default connect(null, { getPoi, getHourlyEvents, getHourlyStats })(App);
