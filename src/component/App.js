import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyEventsChart from './DailyEventsChart';
import DailyStatsChart from './DailyStats';
import { connect } from 'react-redux';

import {
  getHourlyEvents,
  getDailyEvents,
  getDailyStats,
  getHourlyStats
} from '../actions/';

function App(props) {
  useEffect(() => {
    props.getDailyEvents();
    props.getDailyStats();
    props.getHourlyEvents();
    props.getHourlyStats();
  }, []);

  return (
    <div className="App">
      <DailyEventsChart />
      <DailyStatsChart />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    daily_events: state.dailyEvents,
    daily_stats: state.dailyStats,
    hourly_stats: state.hourlyStats,
    hourly_events: state.hourlyEvents
  };
};

export default connect(mapStateToProps, {
  getHourlyEvents,
  getDailyEvents,
  getDailyStats,
  getHourlyStats
})(App);
