// 예제 4-8. ShoppingCart 컴포넌트에 포함된 사양 객체 구현

import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

// ShoppingCart 드레그 앤드 드롭 사양
// "드롭 대상 사양을 구현하는 일반 객체"
//
// - DropTarget 메서드(모두 선택적)
// - drop: 호환되는 항목이 드롭되면 호출된다.
// - hover: 항목으로 컴포넌트를 가리키면 호출된다.
// - canDrop: 드롭 대상이 항목ㅇ르 수락할 수 있는지 여부를
// 지정하는 데 이용된다.
const ShoppingCartSpec = {
    drop() {
	return { name: 'ShoppingCart' };
    }
};

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
