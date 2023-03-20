const najveci = require('../najveci');

let brojevi = [2, 86, 143, 3, 11, 90];

test('najveci je 143', () => {
    expect(najveci(brojevi)).toEqual(143);
});
