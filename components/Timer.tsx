import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        Timer
        <div>{this.state.count}</div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}> stop</button>
        <button onClick={this.resetTimer}> reset</button>
      </div>
    );
  }
}
