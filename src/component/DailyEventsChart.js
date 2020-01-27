import React, { useState, useEffect } from 'react';
import { Bar } from 'ant-design-pro/lib/Charts';

import { connect } from 'react-redux';

function Charts(props) {
  const dailyEventsData = () => {
    let salesData = [];
    for (let item in props.dailyEvents) {
      salesData.push({
        x: props.dailyEvents[item].date.substring(
          0,
          props.dailyEvents[item].date.indexOf('T')
        ),
        y: parseInt(props.dailyEvents[item].events)
      });
    }
    return salesData;
  };
  //   const [h_e, set_h_e] = useState('events');
  //   const hourlyEventsData = h_e => {
  //     let salesData = [];
  //     let count = 0;

  //     for (let item in props.hourlyEvents) {

  //     }

  //     return salesData;
  //   };
  //   console.log(dailyEventsData(), props.dailyEvents, props);

  return (
    <div>
      <Bar height={200} title={props.name} data={dailyEventsData()} />

      {/* <Bar height={200} title={props.name} data={hourlyEventsData()} />
      <Bar height={200} title={props.name} data={props.logic(props.data)} />
      <Bar height={200} title={props.name} data={props.logic(props.data)} /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return { dailyEvents: state.dailyEvents };
};

export default connect(mapStateToProps, null)(Charts);
