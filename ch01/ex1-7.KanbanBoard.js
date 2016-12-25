// 예제 1-7. KanbanBoard 컴포넌트

import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
    render(){
	return (
	    <div className="app">

		<List id='todo' title="To Do" cards={
		    this.props.cards.filter((card) => card.status === "todo")
		} />

		<List id='in-progress' title='In Progress' cards={
		    this.props.cards.filter((card) => card.status === "in-progress")
		} />
		
		<List id='in-progress' title='Done' cards={
		    this.props.cards.filter((card) => card.status === "done")
		} />

	    </div>
	);
    }
}
export default KanbanBoard;
