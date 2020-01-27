import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';

function DailyStats(props) {
  const [data, setData] = useState({
    labels: [
      'Boston',
      'Worcester',
      'Springfield',
      'Lowell',
      'Cambridge',
      'New Bedford'
    ],
    datasets: [
      {
        label: 'Population',
        data: [617594, 234, 2342, 106519, 2342, 95072],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  });

  return (
    <div
      onClick={() => {
        setData({
          labels: [
            'Boston',
            'Worcester',
            'testing',
            'asdfasdfa',
            'aasdfasdf',
            'asdf Bedford'
          ],
          datasets: [
            {
              label: 'Population',
              data: [617594, 181045, 153060, 106519, 105162, 95072],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        });
      }}>
      <Bar
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dailyStats: state.dailyStats
  };
};

export default connect(mapStateToProps, null)(DailyStats);
