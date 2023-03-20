const najmanji = require('../najmanji');

let brojevi = [2, 86, 143, 3, 11, 90];

test('najmanji je 2', () => {
    expect(najmanji(brojevi)).toEqual(2);
});
