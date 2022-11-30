import React, { useState } from "react";
import Chart1 from "./AnalysisComponents/chart1"
import Chart2 from "./AnalysisComponents/chart2"

function AnalysisTab() {

  return (
    <div className="AnalysisPage">
        <div className="chart1">
            <Chart1/>
        </div>

        <div className="chart2">
            <Chart2/>
        </div>
    </div>
  );
}
  

export default AnalysisTab;
