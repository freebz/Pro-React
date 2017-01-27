// 예제 6-18. 성공 및/또는 오류 액션을 발송하는 완성된 api/AirCheapAPI.js

import 'whatwg-fetch';
import AirportActionCreators from '../actions/AirportActionCreators';

let AirCheapAPI = {
    fetchAirports() {
	fetch('airports.json')
	    .then((response) => {
		return response.json()
	    })
	    .then((responseData) => {
		// 구문 분석된 데이터를 전달하고 AirportActionCreators 성공 액션을 호출한다.
		AirportActionCreators.fetchAirportsSuccess(responseData);
	    })
	    .catch((error) => {
		// error 객체를 전달하고 AirportActionCreators 오류 액션을 호출한다.
		AirportActionCreators.fetchAirportsError(error);
	    });
    }
};

export default AirCheapAPI;
