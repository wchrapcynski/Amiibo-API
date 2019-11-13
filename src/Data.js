import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  grabData = () => {
    axios
      .get("https://www.amiiboapi.com/api/amiibo")
      // .then(res => res.json())
      .then(res => {
        console.log("Got it!", res);
        this.setState({
          data: res.data.amiibo
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.grabData();
  }

  render() {
    console.log(this.state.data);
    return <div className="main"></div>;
  }
}

export default Data;
