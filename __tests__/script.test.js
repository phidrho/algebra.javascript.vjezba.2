const mojModul = require('../script');

test('adds 1 + 2 to equal 3', () => {
  expect(mojModul.sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(mojModul.sum(2, 2)).toEqual(4);
});

let mojaRecenica = 'Moja recenica sadrzi 3 slova e';

test('ima 3 slova e u rečenici', () => {
  expect(mojModul.brojSlova(mojaRecenica, 'e')).toEqual(3);
});
