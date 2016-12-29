// 예제 3-15. 데이터 가져오기 코드

import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

// 서버를 로컬에서 실행하는 경우 기본 URL은 localhost:3000이며
// 로컬 서버에는 권한 부여 헤더가 필요 없다.
const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like' // 로컬 서버의 경우 권한 부여가 필요 없다.
};

class KanbanBoardContainer extends Component {
    constructor(){
	super(...arguments);
	this.state = {
	    cards: []
	};
    }

    componentDidMount(){
	fetch(API_URL+'/cards', {headers: API_HEADERS})
	    .then((response) => response.json())
	    .then((responseData) => {
		this.setState({cards: responseData});
	    })
	    .catch((error) => {
		console.log('Error fetching and parsing data', error);
	    });
    }

    render() {
	return <KanbanBoard cards={this.state.cards} />
    }
}

export default KanbanBoardContainer;
