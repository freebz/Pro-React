// 예제 4-7. ShoppingCart 컴포넌트의 기본 구조

import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

class ShoppingCart extends Component {
    render() {

	const style = {
	    backgroundColor: '#FFFFFF'
	};

	return (
	    <div className='shopping-cart' style={style}>
		Drag here to order!
	    </div>
	);
    }
}
