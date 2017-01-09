// 예제 5-14. 업데이트된 App.js

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Repos from './Repos';
import RepoDetails from './RepoDetails';

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
	 <Route path="repos" component={Repos}>
	    {/* UI를 중첩하려는 위치에 라우트를 중첩해 추가한다. */}
	    <Route path="details/:repo_name" component={RepoDetails} />
	 </Route>
      </Route>
   </Router>
), document.getElementById('root'));
