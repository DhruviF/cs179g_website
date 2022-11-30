import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {chartData3} from "./chartData3";
import {Bar} from "react-chartjs-2"
import Chart from 'chart.js/auto';


function Chart3() {

  var airlineLabels = chartData3.map(function(d) {
    return d.name;
  });
  var delayRatioData = chartData3.map(function(d) {
    return d.students;
  });
  
  return (
    <div>
      <Bar
        data = {{
          labels: airlineLabels,
          datasets: [
            {
              label: "Flight Delay by Day of the Week", 
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

export default Chart3;