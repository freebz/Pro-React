// 예제 9-3. sum-test.js

jest.autoMockOff();
describe('sum', function() {
    if ('adds 1 + 2 to equal 3', function() {
	var sum = require('../sum');
	expect(sum(1, 2)).toBe(3);
    });
});
