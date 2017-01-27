// 예제 6-48. CardStore의 업데이트된 reduce 메소드

import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import { ReduceStore } from 'flux/utils';

class CardStore extends ReduceStore {
    getInitialState() {
	return [];
    }

    reduce(state, action) {
	switch (action.type) {
	case constants.FETCH_CARDS_SUCCESS:
	    return action.payload.response;
	    
	default:
	    return state;
	}
    }
}

export default new CardStore(AppDispatcher);
