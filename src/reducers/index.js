import { combineReducers } from 'redux';

import { getHourlyEventsReducer, getDailyEventsReducer, getAvgHourlyStatsReducer, getSumHourlyStatsReducer, getDailyStatsReducer, getPoiReducer, getHourlyStats, getHourlyEvents } from './marketingDataReducer';

export default combineReducers({
	avgHourlyStats: getAvgHourlyStatsReducer,
	sumHourlyStats: getSumHourlyStatsReducer,
	hourlyEvents: getHourlyEventsReducer,
	dailyEvents: getDailyEventsReducer,
	dailyStats: getDailyStatsReducer,
	hourlyStats: getHourlyStats,
	hourlyEvents: getHourlyEvents,

	poi: getPoiReducer
});
