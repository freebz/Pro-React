// 예제 6-22. getSuggestions 함수

getSuggestions(input, callback) {
    const escapedInput = input.trim().toLowerCase();
    const airportMatchRegex = new RegExp('\\b' + escapedInput, 'i');
    const suggestions = this.state.airports
	  .filter(airport => airportMatchRegex.test(airport.city))
	  .sort((airport1, airport2) => {
	      airport1.city.toLowerCase().indexOf(escapedInput) -
		  airport2.city.toLowerCase().indexOf(escapedInput)
	  })
	  .slice(0, 7)
	  .map(airport => `${airport.city} - ${airport.country} (${airport.code})`);
    callback(null, suggestions);
}
