// 예제 5-10. 리액트 라우터를 이용하는 전체 코드

import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link } from 'react-router';

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

render((
   <Router>
      <Route path="/" component={App}>
	<IndexRoute component={Home}/>
	 <Route path="about" component={About}/>
	 <Route path="repos" component={Repos}/>
      </Route>
   </Router>
), document.getElementById('root'));
