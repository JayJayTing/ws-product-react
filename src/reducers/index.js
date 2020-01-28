import { combineReducers } from 'redux';
import marketingStats from './marketingDataReducer';
import {
  getHourlyEventsReducer,
  getDailyEventsReducer,
  getAvgHourlyStatsReducer,
  getSumHourlyStatsReducer,
  getDailyStatsReducer,
  getPoiReducer
} from './marketingDataReducer';

export default combineReducers({
  avgHourlyStats: getAvgHourlyStatsReducer,
  sumHourlyStats: getSumHourlyStatsReducer,
  hourlyEvents: getHourlyEventsReducer,
  dailyEvents: getDailyEventsReducer,
  dailyStats: getDailyStatsReducer,

  poi: getPoiReducer
});
