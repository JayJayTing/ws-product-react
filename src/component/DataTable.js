import React, { useEffect, useState } from 'react';
import { getHourlyEvents, getHourlyStats } from '../actions';
import { connect } from 'react-redux';
import { Table } from 'antd';
function DataTable(props) {
	useEffect(() => {
		props.getHourlyEvents();
		props.getHourlyStats();
	}, []);

	const columns = [
		{
			title: '',
			dataIndex: 'name',
			width: 150
		},
		{
			title: 'Age',
			dataIndex: 'age',
			width: 150
		},
		{
			title: 'Address',
			dataIndex: 'address'
		},
		{
			title: 'Age',
			dataIndex: 'age',
			width: 150
		},
		{
			title: 'Address',
			dataIndex: 'address'
		}
	];

	const data = [];
	for (let i = 0; i < 100; i++) {
		data.push({
			key: i,
			name: `Edward King ${i}`,
			age: 32,
			address: `London, Park Lane no. ${i}`
		});
	}

	return (
		<div>
			<Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
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
