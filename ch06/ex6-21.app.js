// 예제 6-21. app.js 컴포넌트의 기본 구조

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';

import Autosuggest from 'react-autosuggest';
import AirportStore from './stores/AirportStore';
import AirportActionCreators from './actions/AirportActionCreators';

class App extends Component {
    componentDidMound() {
	AirportActionCreators.fetchAirports();
    }

    render() {
	return (
	   <div>
	      <header>
		 <div className="header-brand">
		    <img src="logo.png" height="35" />
		    <p>Check discount ticket prices and pay using your AirCheap points</p>
		 </div>
		 <div className="header-route">
		    <Autosuggest id='origin'
	                  inputAttributes={{placeholder:'From'}} />
		    <Autosuggest id='destination'
	                  inputAttributes={{placeholder:'To'}} />
		 </div>
	      </header>
	   </div>
	);
    }
}

App.getStores = () => ([AirportStore]);
App.calculateState = (prevState) => ({
    airports: AirportStore.getState()
});

const AppContainer = Container.create(App);
render(<AppContainer />, document.getElementById('root'));
