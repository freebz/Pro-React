// 예제 A-13. ES6 모듈 정의를 이용하고 리액트 컴포넌트를 반환하도록 Greeter를 리팩터링

import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component {
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
