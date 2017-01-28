// 예제 7-5. 1초 이상 프로파일링을 수행하고 결과를 출력

import React, { Component } from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';
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

Perf.start();
render(<App />, document.getElementById("root"));
setTimeout(() => {
  Perf.stop();
  Perf.printWasted();
}, 1500)
