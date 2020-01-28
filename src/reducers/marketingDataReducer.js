import {
  GET_HOURLY_EVENTS,
  GET_DAILY_EVENTS,
  GET_AVG_HOURLY_STATS,
  GET_SUM_HOURLY_STATS,
  GET_DAILY_STATS,
  GET_POI
} from '../actions/types';

export const getHourlyEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HOURLY_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

export const getDailyEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DAILY_EVENTS:
      return action.payload;
    default:
      return state;
  }
};
export const getAvgHourlyStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_AVG_HOURLY_STATS:
      let obj = state;
      if (!obj[action.id]) {
        obj[action.id] = action.payload;
      } else {
        obj[action.id] = action.payload;
      }
      return obj;
    default:
      return state;
  }
};

export const getSumHourlyStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_AVG_HOURLY_STATS:
      return action.payload;
    default:
      return state;
  }
};

export const getDailyStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DAILY_STATS:
      return action.payload;
    default:
      return state;
  }
};

export const getPoiReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POI:
      return action.payload;
    default:
      return state;
  }
};

export const test = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      return action.payload;
    default:
      return state;
  }
};
