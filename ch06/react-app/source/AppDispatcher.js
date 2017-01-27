// 예제 6-2. 표준 플럭스 디스패치를 확장해 모든 이벤트 발송을 로깅하는 AppDispatcher.js

import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
    dispatch(action = {}) {
	console.log("Dispatched", action);
	super.dispatch(action);
    }
}

export default new AppDispatcher();
