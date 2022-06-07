import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";

function App(props) {
  

    return <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={props.options}
              series={props.series}
              type={props.type}
              width="500"
            />
          </div>
        </div>
      </div>
</>
}

export default App;
