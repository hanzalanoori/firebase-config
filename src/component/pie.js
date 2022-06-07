import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

// class Pie extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {},
//       series: [44, 55, 41, 17, 15],
//       labels: ['A', 'B', 'C', 'D', 'E']
//     }
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="donut"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Pie;


function Pie(props){

  const [series,setSeries] = useState(null)
  const [labels,setLabels] = useState(null)
  const [options,setOtions] = useState({})

  
  useEffect(() => {
    setSeries(props.data.map((e) => e.postId,))
    setLabels(props.data.map((e) => `${e.name}`,))
  })



  return <>
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="donut"
            width="500"
            labels={labels}
          />
        </div>
      </div>
    </div>
  </>
}

export default Pie;
