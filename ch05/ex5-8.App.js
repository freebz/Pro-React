// 예제 5-8. 업데이트된 App 컴포넌트 클래스

import React, { Component } from 'react';
import { render } from 'react-dom';

// 먼저 몇 가지 컴포넌트를 임포트한다.
import { Router, Route, Link } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './Repos';

class App extends Component {
    render() {
	return (
	   <div>
	      <header>App</header>
	      <menu>
		 <ul>
		    <li><Link to="/about">About</Link></li>
		    <li><Link to="/repos">Repos</Link></li>
		 </ul>
	      </menu>
	      {this.props.children}
	   </div>
	);
    }
}

render(<App />, document.getElementById('root'));
