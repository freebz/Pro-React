// 예제 5-20. App.js의 업데이트된 임포트와 라우트 정의

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import About from './About';
import Repos from './Repos';
import RepoDetails from './RepoDetails';
import Home from './Home';
import ServerError from './ServerError';

class App extends Component {
    render() {
	return (
	   <div>
	      <header>App</header>
	      <menu>
		 <ul>
		    <li><Link to="/about" activeClassName="active">About</Link></li>
		    <li><Link to="/repos" activeClassName="active">Repos</Link></li>
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
	 <Route path="about" component={About} title="About Us" />
	 <Route path="repos" component={Repos}>
	    {/* UI를 중첩하려는 위치에 라우트를 중첩해 추가한다. */}
	    <Route path="/repo/:repo_name" component={RepoDetails} />
	 </Route>
	 <Route path="error" component={ServerError} />
      </Route>
   </Router>
), document.getElementById('root'));
