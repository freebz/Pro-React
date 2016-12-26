// JSX를 배제하고 리액트를 이용

// 일반 자바스크립트로 리액트 요소 만들기

let child1 = React.createElement('li', null, 'First Text Content');
let child2 = React.createElement('li', null, 'Second Text Content');
let root = React.createElement('ul', { className: 'my-list' }, child1, child2);
React.render(root, document.getElementById('example'));


// 요소 팩토리

React.DOM.form({className:"commentForm"},
    React.DOM.input({type:"text", placeholder:"Name"}),
    React.DOM.input({type:"text", placeholder:"Comment"}),
    React.DOM.input({type:"submit", value:"Post"})
)

// 다음 JSX와 동일한 효과가 있다.

<form className="commentForm">
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Comment" />
    <input type="submit" value="Post" />
</form>


// 구조분해 할당을 이용

import React, { Component } from 'react';
import {render} from 'react-dom';

let {
    form,
    input
} = React.DOM;

class CommentForm extends Component {
    render() {
	return form({className:"commentForm"},
	    input({type:"text", placeholder:"Name"}),
	    input({type:"text", placeholder:"Comment"}),
	    input({type:"submit", value:"Post"})
	)
    }
}


// 커스텀 팩토리

let Factory = React.createFactory(ComponentClass);
//...
let root = Factory({ custom: 'prop' });
render(root, document.getElementById('example'));


// 인라인 스타일 정의

import React, { Component } from 'react';
import {render} from 'react-dom';

class Hello extends Component {
    render() {
	let divStyle = {
	    width: 100,
	    height: 30,
	    padding: 5,
	    backgroundColor: '#ee9900'
	};
	return <div style={divStyle}>Hello World</div>
    }
}
