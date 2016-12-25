// 첫 번째 컴포넌트 만들기

import React from 'react';

class Hello extends React.Component {
    render() {
	return (
		<h1>Hello World</h1>
	)
    }
}

React.render(<Hello />, document.getElementById('root'));
