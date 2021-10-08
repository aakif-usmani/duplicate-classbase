import react from "react";
import React from "react";
import "./Form.css";

class Form extends react.Component {
  constructor() {
    super();
    this.state = {
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
      showHide: false,
    };
  }
showHideHandler = () => {
    this.setState({showHide:!this.state.showHide})
}
  titleChangeHandler = (event) => {
    this.setState({ enterdTitle: event.target.value });
  };
  render() {
    return (
      <div className="main">
        <div>
          <h1 className="heading-expense">EXPENSE MANAGER</h1>
        </div>
        <div className="form-main">
          <form>
            <div>
              <button className="input">Add New Expense</button>
            </div>
            <label>Expense</label>
            <input
              className="text-input  input"
              type="text"
              placeholder="Enter Title "
              value={this.state.enteredTitle}
              onChange={this.titleChangeHandler}
            ></input>
            <label>Amount</label>
            <input
              className="amount-input input"
              placeholder="Add Amount"
              type="number"
              min="1"
              step="1"
            ></input>
            <label>Date</label>
            <input
              className="date-input input"
              placeholder="Add Date"
              type="date"
            ></input>
            <div>
              <button className="input">cancel</button>
              <button className="input">Add Expense</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
