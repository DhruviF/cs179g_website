import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {chartData} from "./chartData1";
import {Bar} from "react-chartjs-2"
import "./chart1.css"
import Chart from 'chart.js/auto';


function Chart1() {

  var airlineLabels = chartData.map(function(d) {
    return d.Airline;
  });
  var delayRatioData = chartData.map(function(d) {
    return d.entiredelayedRatio;
  });
  
  return (
    <div>
      <Bar
        data = {{
          labels: airlineLabels,
          datasets: [
            {
              label: "Flight Delay Percentage by Airline", 
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

export default Chart1;