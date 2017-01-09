// 예제 5-4. About 컴포넌트

import React, { Component } from 'react';

class About extends Component {
    render() {
	return (
		<h1>{this.props.route.title}</h1>
	);
    }
}

export default About;
