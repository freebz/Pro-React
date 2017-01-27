// 예제 6-34. 업데이트된 AirCheapAPI.js 파일

import 'whatwg-fetch';

let AirCheapAPI = {
    fetchAirports() {
	return fetch('airports.json')
	    .then((response) => response.json());
    },

    fetchTickets(origin, destination) {
	return fetch('flights.json')
	    .then((response) => response.json());
    }
};

export default AirCheapAPI;
