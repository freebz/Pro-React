// 예제 1-13. Card 컴포넌트

import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
    constructor() {
	super(...arguments);
	this.state = {
	    showDetails: false
	};
    }
    
    render() {
	return (
	    <div className="card">
		<div className="card__title">{this.props.title}</div>
		<div className="card__details">
		    {this.props.description}
		    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
		</div>
	    </div>
	);
    }
}

export default Card;
