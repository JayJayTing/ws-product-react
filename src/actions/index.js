import axios from 'axios';
import { GET_HOURLY_EVENTS, GET_HOURLY_STATS, GET_DAILY_EVENTS, GET_AVG_HOURLY_STATS, GET_SUM_HOURLY_STATS, GET_DAILY_STATS, GET_POI } from '../actions/types';

export const getDailyEvents = id => async dispatch => {
	let response = await axios.post('http://localhost:5555/events/daily', { id });
	dispatch({ type: GET_DAILY_EVENTS, payload: response.data });
};

export const getAvgHourlyStats = (id, minDate, maxDate) => async dispatch => {
	let response = await axios.post('http://localhost:5555/stats/hourly/avg', {
		id,
		minDate,
		maxDate
	});

	dispatch({
		type: GET_AVG_HOURLY_STATS,
		payload: response.data,
		id
	});
};
export const getSumHourlyStats = (id, minDate, maxDate) => async dispatch => {
	let response = await axios.post('http://localhost:5555/stats/hourly/sum', {
		id,
		minDate,
		maxDate
	});
	dispatch({
		type: GET_SUM_HOURLY_STATS,
		payload: response.data,
		id
	});
};
export const getDailyStats = id => async dispatch => {
	let response = await axios.post('http://localhost:5555/stats/daily', { id });
	dispatch({ type: GET_DAILY_STATS, payload: response.data });
};

export const getPoi = id => async dispatch => {
	let response = await axios.get('http://localhost:5555/poi');
	dispatch({ type: GET_POI, payload: response.data });
};
export const getHourlyStats = () => async dispatch => {
	let response = await axios.get('http://localhost:5555/stats/hourly');
	dispatch({ type: GET_HOURLY_STATS, payload: response.data });
};

export const getHourlyEvents = () => async dispatch => {
	let response = await axios.get('http://localhost:5555/events/hourly');
	dispatch({ type: GET_HOURLY_EVENTS, payload: response.data });
};
