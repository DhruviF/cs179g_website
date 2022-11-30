import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {chartData2} from "./chartData2";
import {Bar} from "react-chartjs-2"
import Chart from 'chart.js/auto';


function Chart2() {

  var airlineLabels = chartData2.map(function(d) {
    return d.OriginCityName;
  });
  var delayRatioData = chartData2.map(function(d) {
    return d.EntiredelayedRatio;
  });
  
  return (
    <div>
      <Bar
        data = {{
          labels: airlineLabels,
          datasets: [
            {
              label: "Flight Delay Percentage by City", 
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

export default Chart2;