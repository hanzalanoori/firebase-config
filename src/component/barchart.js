import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

function Barchart(props) {
  
  const [state,setState] = useState({ series: [{
    data: [44, 44, 44, 44, 44, 44, 44]
  }, {
    data: [44, 44, 44, 44, 44, 44, 44]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
  },})

    return <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
      </>
}

export default Barchart;


