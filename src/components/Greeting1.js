import React, { Component } from "react";

class Greeting1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.refreshGreeting(), 10000);
  }

  refreshGreeting() {
    this.setState((state, props) => ({
      time: props.time,
    }));
  }

  render() {
    return (
      <div className="Greeting">
        <h1>Good {this.state.time} - G1</h1>
      </div>
    );
  }
}

export default Greeting1;
