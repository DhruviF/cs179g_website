import React, { useState } from "react";
import "./Analysis.css"
import Chart1 from "./AnalysisComponents/chart1"
import Chart2 from "./AnalysisComponents/chart2"
import Chart3 from "./AnalysisComponents/chart3";
import Chart4 from "./AnalysisComponents/chart4";

function AnalysisTab() {

  return (
    <div className="AnalysisPage">
        <div className="chart1">
            <Chart1/>
        </div>

        <div className="chart2">
            <Chart2/>
        </div>

        <div className="chart3">
            <Chart3/>
        </div>

        <div className="chart4">
            <Chart4/>
        </div>
    </div>
  );
}
  

export default AnalysisTab;
