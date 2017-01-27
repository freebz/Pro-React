// 예제 6-17. api/AirCheapAPI.js 파일의 초안

import 'whatwg-fetch';

let AirCheapAPI = {
    fetchAirports() {
	fetch('airports.json')
	    .then((response) => response.json())
	    .then((responseData) => {
		// 구문 분석된 데이터를 전달하고 AirportActionCreators 성공 액션을 호출한다.
	    })
	    .catch((error) => {
		// error 객체를 전달하고 AirportActionCreators 오류 액션을 호출한다.
	    });
    }
};

export default AirCheapAPI;
