// 예제 6-47. KanbanApi 소스코드와 fetchCards 메서드

import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
}

let KanbanAPI = {
    fetchCards() {
	return fetch(`${API_URL}/cards`, {headers: API_HEADERS})
	    .then((response) => response.json())
    }
};

export default KanbanAPI;
