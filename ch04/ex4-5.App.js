// 예제 4-5. 메인 App 컴포넌트

import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container'

class App extends Component {
    render(){
	return (
	    <Container />
	);
    }
}

render(<App />, document.getElementById('root'));
