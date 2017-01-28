// 예제 7-4. 리액트 퍼프를 이용해 성능 테스트 애플리케이션을 프로파일링

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
Perf.stop();

Perf.printInclusive();  // 랜더링된 모든 컴포넌트 인스턴스의 리스트와 소비된 시간 표시
Perf.printWasted();     // 변경 사항 없이 렌더링된 컴포넌트 인스턴스를 표시
