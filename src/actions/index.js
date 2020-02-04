import axios from 'axios';
import {
	GET_HOURLY_EVENTS,
	GET_STATS_SUM_GEO,
	GET_EVENTS_SUM_GEO,
	GET_HOURLY_STATS,
	GET_DAILY_EVENTS,
	GET_AVG_HOURLY_STATS,
	GET_SUM_HOURLY_STATS,
	GET_DAILY_STATS,
	GET_POI
} from '../actions/types';

export const getDailyEvents = (id, offset) => async dispatch => {
	let response = await axios.post('https://ws-product-node.herokuapp.com/events/daily', {
		id,
		offset
	});
	dispatch({ type: GET_DAILY_EVENTS, payload: response.data });
};

export const getAvgHourlyStats = (id, minDate, maxDate) => async dispatch => {
	let response = await axios.post('https://ws-product-node.herokuapp.com/stats/hourly/avg', {
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
	let response = await axios.post('https://ws-product-node.herokuapp.com/stats/hourly/sum', {
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
export const getDailyStats = (id, offset) => async dispatch => {
	let response = await axios.post('https://ws-product-node.herokuapp.com/stats/daily', {
		id,
		offset
	});
	dispatch({ type: GET_DAILY_STATS, payload: response.data });
};

export const getPoi = id => async dispatch => {
	let response = await axios.get('https://ws-product-node.herokuapp.com/poi');
	dispatch({ type: GET_POI, payload: response.data });
};
export const getHourlyStats = skip => async dispatch => {
	let response = await axios.post('https://ws-product-node.herokuapp.com/stats/hourly', { skip });
	dispatch({ type: GET_HOURLY_STATS, payload: response.data });
};

export const getHourlyEvents = skip => async dispatch => {
	let response = await axios.post('https://ws-product-node.herokuapp.com/events/hourly', { skip });
	dispatch({ type: GET_HOURLY_EVENTS, payload: response.data });
};

export const getStatsSumGeo = skip => async dispatch => {
	let response = await axios.get('https://ws-product-node.herokuapp.com/stats/hourly/geosum', {
		skip
	});
	dispatch({ type: GET_STATS_SUM_GEO, payload: response.data });
};
export const getEventsSumGeo = skip => async dispatch => {
	let response = await axios.get('https://ws-product-node.herokuapp.com/events/hourly/geosum', {
		skip
	});
	dispatch({ type: GET_EVENTS_SUM_GEO, payload: response.data });
};
