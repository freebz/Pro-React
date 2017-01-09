// 예제 5-19. 약간의 인라인 스타일링을 포함하는 ServerError 컴포넌트

import React, { Component } from 'react';

const styles={
    root:{
	textAlign: 'center'
    },
    alert:{
	fontSize: 80,
	fontWeight: 'bold',
	color: '#e9ab2d'
    }
};

class ServerError extends Component {
    render() {
	return (
	    <div style={styles.root}>
		<div style={styles.alert}>&#9888; </div>
		{/* &#9888;은 경고 기호를 나타내는 html 엔터티 코드다. */}
		<h1>Ops, we have a pronblem</h1>
		<p>Sorry, we could't access the repositories.
		   Please try again in a few moments.</p>
	    </div>
	);
    }
}

export default ServerError;
