// 예제 6-6. BankBalanceStore로부터 상태를 얻는 App 컴포넌트의 코드 일부

import React, { Component } from 'react';
import { render } from 'react-dom';
import BankBalanceStore from './BankBalanceStore';
import BankActions from './BankActions';

class App extends Component {
    constructor() {
	super(...arguments);
	BankActions.createAccount();
	this.state = {
	    balance: BankBalanceStore.getState()
	}
    }

    componentDidMount() {
	this.storeSubscription = BankBalanceStore.addListener(
	    data => this.handleStoreChange(data));
    }

    componentWillUnmount() {
	this.storeSubscription.remove();
    }

    handleStoreChange() {
	this.setState({balance: BankBalanceStore.getState()});
    }
}
