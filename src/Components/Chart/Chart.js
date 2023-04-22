import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.datapoints.map(datapoint => datapoint.value)
    const totalMax = Math.max(...dataPointValues)
    console.log(props.datapoints)
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return(
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={totalMax}
          label={datapoint.label}
        />);
      })}
    </div>
  );
};

export default Chart;
