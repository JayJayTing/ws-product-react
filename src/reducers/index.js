import { combineReducers } from 'redux';
import marketingStats from './marketingDataReducer';
import {
  getHourlyEventsReducer,
  getDailyEventsReducer,
  getHourlyStatsReducer,
  getDailyStatsReducer,
  getPoiReducer
} from './marketingDataReducer';

export default combineReducers({
  hourlyStats: getHourlyStatsReducer,
  hourlyEvents: getHourlyEventsReducer,
  dailyEvents: getDailyEventsReducer,
  dailyStats: getDailyStatsReducer,
  poi: getPoiReducer
});
