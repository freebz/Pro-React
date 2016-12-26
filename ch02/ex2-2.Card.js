// 예제 2-2. 칸반 앱: 카드가 열려있는지 여부 확인

import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
    constructor() {
	super(...arguments);
	this.state = {
	    showDetails: false
	};
    }

    toggleDetails() {
	this.setState({showDetails: !this.state.showDetails});
    }
    
    render() {
	let cardDetails;
	if (this.state.showDetails) {
	    cardDetails = (
		<div className="card__details">
		    {this.props.description}
		    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
		</div>
	    );
	};
	
	return (
	    <div className="card">
		<div className={
		    this.state.showDetials? "card_title card_title--is-open" : "card__title"
		} onClick={this.toggleDetails.bind(this)}>
		    {this.props.title}
	        </div>
		{cardDetails}
	    </div>
	);
    }
}

export default Card;
