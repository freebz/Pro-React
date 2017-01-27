// 예제 6-32. dispatchAsync를 이용하는 업데이트된 AppDespatcher

import { Dispatcher } from 'flux';
import 'babel-polyfill';

class AppDispatcher extends Dispatcher {
    dispatch(action = {}) {
	console.log("Dispatched", action.type);
	super.dispatch(action);
    }

    /**
     * promise가 나타내는 비동기 작업에 대한 세 가지 액션을 발송한다.
     */
    dispatchAsync(promise, types, payload) {
	const { request, success, failure } = types;
	this.dispatch({ type: request, payload: Object.assign({}, payload) });
	promise.then(
	    response => this.dispatch({
		type: success,
		payload: Object.assign({}, payload, { response })
	    }),
	    error => this.dispatch({
		type: failure,
		payload: Object.assign({}, payload, { error })
	    })
	);
    }
}

export default new AppDispatcher();
