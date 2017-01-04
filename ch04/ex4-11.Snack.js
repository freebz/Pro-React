// 예제 4-11. Snack 컴포넌트에 포함된 사양 객체 구현

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

// snack 드래그 앤드 드롭 사양
//
// - 필수: beginDrag
// - 선택: endDrag
// - 선택: canDrag
// - 선택: isDragging
const snackSpec = {
    beginDrag(props) {
	return {
	    name: props.name
	};
    },

    endDrag(props, monitor) {
	const dragItem = monitor.getItem();
	const dropResult = monitor.getDropResult();

	if (dropResult) {
	    console.log('You dropped ${dragItem.name} into ${dropResult.name}');
	}
    }
};

class Snack extends Component {
    render() {
	const { name } = this.props;

	const style = {
	    opacity: 1
	};

	return (
	    <div className='snack' style={style}>
		{name}
	    </div>
	)
    }
}
Snack.propTypes = {
    name: PropTypes.string.isRequred
};
