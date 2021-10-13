import react from "react";
import "./Chart.css";

class Chart extends react.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  totalExpense = 0;
  monthCount = [
    { label: "Jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  render() {
    return (
      <div className="chart-main">
        <p>
          <b>Chart</b>
        </p>
      </div>
    );
  }
}

export default Chart;
