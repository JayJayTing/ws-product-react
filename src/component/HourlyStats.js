import React, { useState, useEffect } from 'react';
import { getHourlyStats } from '../actions';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';

function HourlyStats(props) {
  const [poi_id, set_poi_id] = useState(1);

  useEffect(() => {
    props.getHourlyStats(poi_id);
  }, []);
  let obj = {};

  for (let item in props.hourlyStats) {
    let event = props.hourlyStats[item];
    if (!obj[event.poi_id]) {
      obj = { ...obj, [event.poi_id]: [event] };

      console.log('initial add', obj);
    } else {
      obj[event.poi_id].push(event);

      //console.log(event.poi_id, event, dataSets);
    }
  }

  // var data = {
  //   ,
  //   datasets: [
  //     {
  //       label: 'Prime and Fibonacci',
  //       fillColor: 'rgba(220,220,220,0.2)',
  //       strokeColor: 'rgba(220,220,220,1)',
  //       pointColor: 'rgba(220,220,220,1)',
  //       pointStrokeColor: '#fff',
  //       pointHighlightFill: '#fff',
  //       pointHighlightStroke: 'rgba(220,220,220,1)',
  //       data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  //     },
  //     {
  //       label: 'My Second dataset',
  //       fillColor: 'rgba(151,187,205,0.2)',
  //       strokeColor: 'rgba(151,187,205,1)',
  //       pointColor: 'rgba(151,187,205,1)',
  //       pointStrokeColor: '#fff',
  //       pointHighlightFill: '#fff',
  //       pointHighlightStroke: 'rgba(151,187,205,1)',
  //       data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  //     }
  //   ]
  // };

  var data = {
    labels: [
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
    datasets: [
      {
        label: 'Prime and Fibonacci',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      }
    ]
  };

  return (
    <div>
      <Line
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false }}></Line>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    hourlyStats: state.hourlyStats
  };
};

export default connect(mapStateToProps, { getHourlyStats })(HourlyStats);
