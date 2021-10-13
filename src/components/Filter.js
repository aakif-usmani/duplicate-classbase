import react from "react";
import "./Filter.css";

class Filter extends react.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="filter-main">
        <p className="filter-text">
          <b>Filter Year </b>
        </p>
        <select
          className="select-filter-year"
          key={""}
          onChange={""}
          value={""}
        >
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    );
  }
}

export default Filter;
