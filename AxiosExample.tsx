import React from "react";
import axios from "axios";

export default class AxiosExample extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/greeting/`).then((res) => {
      const persons = res.data;
      console.log("persons data");
      console.log(persons);
    });
  }

  render() {
    return (
      <ul className="list-actions">
        <li className="list-actions-item">Sum</li>
        <li className="list-actions-item">subtract</li>
        <li className="list-actions-item">multiple</li>
        <li className="list-actions-item">divide</li>
      </ul>
    );
  }
}
