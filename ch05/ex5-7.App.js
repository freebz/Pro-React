// 예제 5-7. 리액트 라우터 컴포넌트 임포트하기

import React, { Component } from 'react';
import { render } from 'react-dom';

// 먼저 몇 가지 컴포넌트를 임포트한다.
import { Router, Route, Link } from 'react-router';

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

    render() {
	var Child;
	switch (this.state.route) {
	    case '/about': Child = About; break;
	    case '/repos': Child = Repos; break;
	    default: Child = Home;
	}

	return (
	   <div>
	      <header>App</header>
	      <menu>
		 <ul>
		    <li><a href="#/about">About</a></li>
		    <li><a href="#/repos">Repos</a></li>
		 </ul>
	      </menu>
	      <Child/>
	   </div>
	)
    }
}

render(<App />, document.getElementById('root'));
