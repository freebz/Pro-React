// 03 컴포넌트를 이용한 애플리케이션 구축

// 속성 유효성 검사

import React, { Component } from 'react';
import { render } from 'react-dom';

class Greeter extends Component {
    render() {
	return (
		<h1>{this.props.salutation}</h1>
	)
    }
}

render(<Greeter salutation="Hello World" />, document.getElementById('root'));




import React, { Component } from 'react';
import { render } from 'react-dom';

class Greeter extends Component {
    render() {
	return (
		<h1>{this.props.salutation}</h1>
	)
    }
}
Greeter.propTypes = {
    salutation: PropTypes.string.isRequired
}

render(<Greeter salutation="Hello World" />, document.getElementById('root'));


// 속성 기본값

class Greeter extends Component {
    render() {
	return (
		<h1>{this.props.salutation}</h1>
	)
    }
}

Greeter.propTypes = {
    salutation: PropTypes.string
}

Greeter.defaultProps = {
    salutation: "Hello World"
}

render(<Greeter />, document.getElementById('root'));


