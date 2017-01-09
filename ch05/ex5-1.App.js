// 예제 5-1. URL을 기준으로 자식 컴포넌트를 렌더링하는 컴포넌트

import React, { Component } from 'react';
import { render } from 'react-dom';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component {
    constructor() {
	super(...arguments);
	this.state = {
	    route: window.location.hash.substr(1)
	};
    }

    componentDidMount() {
	window.addEventListener('hashchange', () => {
	    this.setState({
		route: window.location.hash.substr(1)
	    });
	});
    }

    render() {...}
}

render(<App />, document.getElementById('root'));
