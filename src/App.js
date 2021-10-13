import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import Filter from "./components/Filter";
import Form from "./components/Form";
import List from "./components/List.js";

class App extends React.Component {
  DUMMY_ESPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  constructor() {
    super();
    this.state = {
      expense:this.DUMMY_ESPENSES,
    };
  }

 
 

  render() {
    return (
      <div className="App">
        <div className="main2" >
        <Form />
        <Chart expense={this.state.expense} />
        <Filter />
        <List expense={this.state.expense} />
        </div>
      </div>
    );
  }
}

export default App;
