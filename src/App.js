import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    
  }

  render() {
    console.log(this.state.data)
    return <div className="main"></div>;
  }
}

export default App;
