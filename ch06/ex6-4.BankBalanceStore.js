// 예제 6-4. 일반 자바스크립트 객체 스토어

import { EventEmitter } from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();

let BankBalanceStore = {
    addListener: (callback) => {
	return __emitter.addListener(CHANGE_EVENT, callback);
    },

};

BankBalaceStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
    }
});

export default BankBalanceStore;
