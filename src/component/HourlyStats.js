import React, { useState, useEffect } from 'react';
import { getAvgHourlyStats, getPoi, getSumHourlyStats } from '../actions';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Button } from 'antd';
import _ from 'lodash';
import './HourlyStats.css';

function HourlyStats(props) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    props.getAvgHourlyStats(4, '2017-01-20', '2017-06-20');
    props.getAvgHourlyStats(1, '2017-04-20', '2017-06-20');
    props.getAvgHourlyStats(2, '2017-04-20', '2017-06-20');
    props.getAvgHourlyStats(3, '2017-04-20', '2017-06-20');
  }, []);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  const [data, setData] = useState({
    labels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    datasets: []
  });

  const addDataSet = companyId => {
    let rev = [];
    let clicks = [];
    let imps = [];
    let label = '';

    for (let index in companyId) {
      let stats = companyId[index];
      rev.push(stats.revenue);
      clicks.push(stats.clicks);
      imps.push(stats.impressions);
      label = stats.name;
      console.log(' name is' + stats.name);
    }

    setData({
      ...data,
      datasets: [
        ...data.datasets,
        {
          data: clicks,
          clicks,
          rev,
          imps,
          label,
          fill: false,
          borderColor: '#c45850'
        }
      ]
    });
  };

  console.log('LOOK HERE AVG HOURLY STATS', data);
  return (
    <div>
      <Line data={data}></Line>
      <form onSubmit={() => {}}>
        <input
          value={minDate}
          onChange={e => {
            setMinDate(e.target.value);
          }}></input>
        <input
          value={maxDate}
          onChange={e => {
            setMaxDate(e.target.value);
          }}></input>
        <Button
          onClick={() => {
            addDataSet(props.avgHourlyStats[count]);
            setCount(count + 1);
            //addDataSet(props.avgHourlyStats[4]);
          }}>
          Test
        </Button>
      </form>
      {/* <div className="button-styling">{selectPoi(props.poi)}</div> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    avgHourlyStats: state.avgHourlyStats,
    sumHourlyStats: state.sumHourlyStats,
    poi: state.poi
  };
};

export default connect(mapStateToProps, {
  getAvgHourlyStats,
  getPoi,
  getSumHourlyStats
})(HourlyStats);
