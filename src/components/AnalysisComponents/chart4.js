import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {chartData4} from "./chartData4";
import {Bar} from "react-chartjs-2"
import Chart from 'chart.js/auto';


function Chart4() {

  var airlineLabels = chartData4.map(function(d) {
    return d.name;
  });
  var delayRatioData = chartData4.map(function(d) {
    return d.students;
  });
  
  return (
    <div>
      <Bar
        data = {{
          labels: airlineLabels,
          datasets: [
            {
              label: "Flight Cancellation by Day of the Week", 
              data: delayRatioData,
            },
          ]
        }}
        height = {200}
        width = {300}
      />
    </div>
  );
}

export default Chart4;