// 예제 6-39. AppDispatcher.js

import { Dispatcher } from 'flux';
import 'babel-polyfill';

class AppDispatcher extends Dispatcher {
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
