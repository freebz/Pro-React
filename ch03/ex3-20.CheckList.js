// 예제 3-20. 모든 태스크 콜백을 호출할 수 있는 CheckList 컴포넌트

import React, { Component, PropTypes } from 'react';

class CheckList extends Component {
    checkInputKeyPress(evt){
	if(evt.key === 'Enter'){
	    this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
	    evt.target.value = '';
	}
    }
    render() {
	let tasks = this.props.tasks.map((task, taskIndex) => (
	    <li key={task.id} className="checklist__task">
		<input type="checkbox" checked={task.done} onChange={
		    this.props.taskCallbacks.toggle.bind(null, this.props.cardId,
		    task.id, taskIndex)
		} />
		{task.name}{' '}
		<a href="#" className="checklist__task--remove" onClick={
		    this.props.taskCallbacks.delete.bind(null, this.props.cardId,
		    task.id, taskIndex)
		} />
	    </li>
	));
	return (
	    <div className="checklist">
		<ul>{tasks}</ul>
		<input type="text"
	              className="checklist--add-task"
	              placeholder="Type then hit Enter to add a task"
	              onKeyPress={this.checkInputKeyPress.bind(this)} />
	    </div>
	);
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    taskCallbacks: PropTypes.object,
    tasks: PropTypes.array
};
export default CheckList;
