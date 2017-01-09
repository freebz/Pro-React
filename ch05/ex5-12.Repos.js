// 예제 5-12. 리포지터리 리스트를 위한 Link 컴포넌트를 추가하고 중첩된 RepoDetails 컴포넌트를 렌더링한다.

import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router';

class Repos extends Component {
    constructor() {
	super(...arguments);
	this.state = {
	    repositories: []
	};
    }

    componentDidMount() {
	fetch('https://api.github.com/users/pro-react/repos')
	    .then((response) => response.json())
	    .then((responseData) => {
		this.setState({repositories:responseData});
	    });
    }
    
    render() {
	let repos = this.state.repositories.map((repo) => (
	    <li key={repo.id}>
		<Link to={"/repos/details/"+repo.name}>{repo.name}</Link>
	    </li>
	));
	return (
	   <div>
	      <h1>Github Repos</h1>
	      <ul>
		 {repos}
	      </ul>
	      {this.props.children}
	   </div> 
	);
    }
}

export default Repos;
