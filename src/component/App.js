import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailyEventsChart from './DailyEventsChart';
import DailyStatsChart from './DailyStats';
import DataTable from './DataTable';
import { getHourlyEvents, getHourlyStats } from '../actions/';
import GeoStats from './GeoStats';
import HourlyStats from './HourlyStats';
import { connect } from 'react-redux';
import { getPoi } from '../actions';

function App(props) {
  useEffect(() => {
    props.getPoi();
  }, []);

  return (
    <div className="App">
      {/* <DailyEventsChart />
      <DailyStatsChart />
      <HourlyStats />
      <DataTable /> */}
      <GeoStats />
    </div>
  );
}

export default connect(null, { getPoi, getHourlyEvents, getHourlyStats })(App);
