// 예제 4-10. Snack 컴포넌트의 기본 구조

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

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
