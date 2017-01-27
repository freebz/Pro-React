// 예제 6-28. stores/RouteStore.js 파일의 전체 소스코드

import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import { MapStore } from 'flux/utils';

class RouteStore extends MapStore {
    reduce(state, action) {
	switch (action.type) {
	case constants.CHOOSE_AIRPORT:
	    // action.target은 "origin"이나 "destination"일 수 있다.
	    // action.code는 선택된 공항 코드를 포함한다.
	    return state.set(action.target, action.code);

	default:
	    return state;
	}
    }
}

export default new RouteStore(AppDispatcher);
