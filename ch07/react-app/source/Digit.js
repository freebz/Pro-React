// 예제 7-8. Digit 컴포넌트의 shouldComponentUpdate 구현

import React, { Component, PropTypes } from 'react';

class Digit extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // 숫자 값이 변경되지 않았으면 다시 렌더링하지 않는다.
    return nextProps.value !== this.props.value;
  }
  
  render() {
    let digitStyle = {
      display: 'inline-block',
      fontSize: 20,
      padding: 10,
      margin: 5,
      background: '#eeeeee'
    };
    
    let displayValue;
    if (this.props.value < 10) {
      displayValue = '0' + this.props.value;
    } else {
      displayValue = this.props.value;
    }
    
    return (
      <div style={digitStyle}>{displayValue}</div>
    );
  }
}

Digit.propTypes = {
  value: PropTypes.number.isRequired
}

export default Digit;
