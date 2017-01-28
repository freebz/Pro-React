// 예제 7-3. App 컴포넌트

import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = this.getTime();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(this.getTime());
    }, 500);
  }

  getTime() {
    let now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    };
  }

  render() {
    return (
      <div>
        <Clock hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
