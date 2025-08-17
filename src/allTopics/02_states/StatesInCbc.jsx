import { Component } from "react";

class StatesInCbc extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.increment = () => {
      this.setState({ value: this.state.value + 1 });
    };
    this.decrement = () => {
      if (this.state.value > 0) {
        this.setState({ value: this.state.value - 1 });
      } else {
        this.setState({ value: 0 });
      }
    };
    this.reset = () => {
      this.setState({ value: 0 });
    };
  }

  render() {
    console.log(this);

    return (
      <div>
        <h1>States In Class Based</h1>
        <h2>Counter : {this.state.value}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StatesInCbc;
