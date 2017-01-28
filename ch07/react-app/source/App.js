// 예제 7-6. 1/100초마다 200개의 Clock 컴포넌트를 랜더링하는 App 컴포넌트

import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';
import Perf from 'react-addons-perf';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = this.getTime();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(this.getTime());
    }, 10);
  }

  getTime() {
    let now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      tenths: parseInt(now.getMilliseconds()/10),
    };
  }

  render() {
    let clocks=[];
    for (var i = 0; i < 200; i++) {
      clocks.push(<Clock hours={this.state.hours} minutes={this.state.minutes}
	seconds={this.state.seconds} tenths={this.state.tenths} />)
    }
    
    return (
      <div>
        {clocks}
      </div>
    );
  }
}

Perf.start();
render(<App />, document.getElementById("root"));
setTimeout(() => {
  Perf.stop();
  Perf.printWasted();
}, 2000)
