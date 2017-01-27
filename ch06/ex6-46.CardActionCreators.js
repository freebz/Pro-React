// 예제 6-46. CardActionCreators의 fetchCards 메서드 구현

import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';

let CardActionCreators = {
    fetchCards() {
	AppDispatcher.dispatchAsync(KanbanAPI.fetchCards(), {
	    request: constants.FETCH_CARDS,
	    success: constants.FETCH_CARDS_SUCCESS,
	    failure: constants.FETCH_CARDS_ERROR
	});
    }
};

export default CardActionCreators;
