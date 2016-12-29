// 예제 3-17. taskCallbacks 속성을 받고 전달하는 KanbanBoard 컴포넌트

import React, { Component, PropTypes } from 'react';
import List from './List';

class KanbanBoard extends Component {
    render(){
	return (
	    <div className="app">

		<List title="To Do" taskCallbacks={this.props.taskCallbacks} cards={
		    this.props.cards.filter((card) => card.status === "todo")
		} />

		<List title='In Progress' taskCallbacks={this.props.taskCallbacks} cards={
		    this.props.cards.filter((card) => card.status === "in-progress")
		} />
		
		<List title='Done' taskCallbacks={this.props.taskCallbacks} cards={
		    this.props.cards.filter((card) => card.status === "done")
		} />

	    </div>
	);
    }
};
KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default KanbanBoard;
