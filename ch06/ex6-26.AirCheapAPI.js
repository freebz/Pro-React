// 예제 6-26. 항공권 데이터를 가져오도록 업데이트된 AirCheapAPI.js 파일

import 'whatwg-fetch';
import AirportActionCreators from '../actions/AirportActionCreators';

let AirCheapAPI = {
    fetchAirports() {
	fetch('airports.json')
	    .then((response) => response.json())
	    .then((responseData) => {
		AirportActionCreators.fetchAirportsSuccess(responseData);
	    })
	    .catch((error) => {
		AirportActionCreators.fetchAirportsError(error);
	    });
    },

    fetchTickets(origin, destination) {
	fetch('flights.json')
	    .then((response) => response.json())
	    .then((responseData) => {
		AirportActionCreators.fetchTicketsSuccess(responseData);
	    })
	    .catch((error) => {
		AirportActionCreators.fetchTicketsError(error);
	    });
    }
};

export default AirCheapAPI;
