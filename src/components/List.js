import react from "react";
import "./List.css";

class List extends react.Component {
  render() {
    return (
      <div className="listed-main">
        <table key={""} className="table">
          <tr className="tr">
            <th>Title</th>
            <th>Date</th>
            <th>amoumt</th>
          </tr>
          {this.props.expense.map((listed, index) => {
            return (
              <tr>
                <td>{listed.title}</td>
                <td>
                  {listed.date.toLocaleString("default", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td>{listed.amount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default List;
