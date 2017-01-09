// 예제 5-17. 업데이트된 RepoDetails.js 메서드

import React, { Component } from 'react';
import 'babel-polyfill';

class RepoDetails extends Component {

    renderRepository() {
	let repository = this.props.repositories.find((repo)=>repo.name === this.props.params.repo_name);
	let stars = [];
	for (var i = 0; i < repository.stargazers_count; i++) {
	    stars.push('★');
	}
	return (
	    <div>
		<h2>{repository.name}</h2>
		<p>{repository.description}</p>
		<span>{stars}</span>
	    </div>
	);
    }

    render() {
	if(this.props.repositories.length > 0) {
	    return this.renderRepository();
	} else {
	    return <h4>Loading...</h4>;
	}
    }
}

export default RepoDetails;
