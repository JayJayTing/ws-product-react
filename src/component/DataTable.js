import React, { useEffect, useState } from 'react';
import { getHourlyEvents, getHourlyStats } from '../actions';
import { connect } from 'react-redux';
import { Table, Button, Input, Switch } from 'antd';
import Fuse from 'fuse.js';

const fuzzySearch = (object, rules, fuzzySeqence) => {
	let fuse = new Fuse(object, rules);
	let analyzed = fuse.search(fuzzySeqence);

	return analyzed;
};

function DataTable(props) {
	useEffect(() => {
		props.getHourlyEvents();
		props.getHourlyStats();
	}, []);
	const [arrangement, setArrangement] = useState(true);

	const [query, setQuery] = useState('');

	const statsColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			width: 150,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Date',
			dataIndex: 'date',
			width: 150,
			sorter: (a, b) => a.date - b.date,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Hour',
			dataIndex: 'hour',
			sorter: (a, b) => a.hour - b.hour,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Impressions',
			dataIndex: 'impressions',
			width: 150,
			sorter: (a, b) => a.impressions - b.impressions,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Clicks',
			dataIndex: 'clicks',
			sorter: (a, b) => a.clicks - b.clicks,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Revenue',
			dataIndex: 'revenue',
			sorter: (a, b) => a.revenue - b.revenue,
			sortDirections: ['ascend', 'descend']
		}
	];

	const eventColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			width: 150,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Date',
			dataIndex: 'date',
			width: 150,
			sorter: (a, b) => a.date - b.date,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Hour',
			dataIndex: 'hour',
			sorter: (a, b) => a.hour - b.hour,
			sortDirections: ['ascend', 'descend']
		},
		{
			title: 'Events',
			dataIndex: 'events',
			width: 150,
			sorter: (a, b) => a.events - b.events,
			sortDirections: ['ascend', 'descend']
		}
	];

	var options = {
		keys: ['name']
	};

	return (
		<div>
			<div>
				Search for Company
				<Input
					value={query}
					onChange={e => {
						setQuery(e.target.value);
					}}
				/>
				<Switch
					type='primary'
					onChange={() => {
						setArrangement(!arrangement);
					}}>
					{arrangement ? 'Show Events Table' : 'Show Stats Table'}
				</Switch>
			</div>
			<div>{arrangement ? 'Events Table' : 'Stats Table'}</div>
			<div>
				<Table columns={arrangement ? eventColumns : statsColumns} dataSource={arrangement ? fuzzySearch(Object.values(props.hourlyEvents), options, query) : fuzzySearch(Object.values(props.hourlyStats), options, query)} pagination={{ pageSize: 50 }} scroll={{ y: 500 }} />
			</div>
			>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		hourlyStats: state.hourlyStats,
		hourlyEvents: state.hourlyEvents
	};
};

export default connect(mapStateToProps, { getHourlyEvents, getHourlyStats })(DataTable);
