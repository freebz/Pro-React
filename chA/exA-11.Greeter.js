// 예제 A-11. 업데이트된 Greeter.js

var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};
