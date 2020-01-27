import axios from 'axios';
import {
  GET_HOURLY_EVENTS,
  GET_DAILY_EVENTS,
  GET_HOURLY_STATS,
  GET_DAILY_STATS,
  GET_POI
} from '../actions/types';

export const getHourlyEvents = () => async dispatch => {
  let response = await axios.get('http://localhost:5555/events/hourly');

  dispatch({ type: GET_HOURLY_EVENTS, payload: response.data });
};

export const getDailyEvents = () => async dispatch => {
  let response = await axios.get('http://localhost:5555/events/daily');
  dispatch({ type: GET_DAILY_EVENTS, payload: response.data });
};

export const getHourlyStats = () => async dispatch => {
  let response = await axios.get('http://localhost:5555/stats/hourly');
  dispatch({ type: GET_HOURLY_STATS, payload: response.data });
};
export const getDailyStats = () => async dispatch => {
  let response = await axios.get('http://localhost:5555/stats/daily');
  dispatch({ type: GET_DAILY_STATS, payload: response.data });
};
