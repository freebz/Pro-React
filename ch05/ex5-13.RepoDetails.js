// 예제 5-13. RepoDetails 컴포넌트

import React, { Component } from 'react';
import 'whatwg-fetch';

class RepoDetails extends Component {
    constructor() {
	super(...arguments);
	this.state = {
	    repository: {}
	};
    }

    fetchData(repo_name) {
	fetch('https://api.github.com/repos/pro-react/'+repo_name)
	    .then((response) => response.json())
	    .then((responseData) => {
		this.setState({repository:responseData});
	    });
    }

    componentDidMound() {
	// 라우터가 매개변수 속성에 키 "repo_name"을 주입한다.
	let repo_name = this.props.params.repo_name;
	this.fetchData(repo_name)
    }

    componentWillReceiveProps(nextProps) {
	// 라우터가 매개변수 속성에 키 "repo_name"을 주입한다.
	let repo_name = nextProps.params.repo_name;
	this.fetchData(repo_name)
    }

    render() {
	let stars = [];
	for (var i = 0; i < this.state.repository.stargazers_count; i++) {
	    stars.push('★');
	}

	return (
	    <div>
		<h2>{this.state.repository.name}</h2>
		<p>{this.state.repository.description}</p>
		<span>{stars}</span>
	    </div>
	);
    }
}

export default RepoDetails;
