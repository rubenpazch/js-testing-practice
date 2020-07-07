const calculator = require('./calculator.js');

test('reverses string', () => {
  expect(calculator(2, '+', 2)).toBe(4);
});

test('reverses string', () => {
  expect(calculator(10, '-', 4)).toBe(6);
});

test('reverses string', () => {
  expect(calculator(9, '*', 6)).toBe(54);
});

test('reverses string', () => {
  expect(calculator(81, '/', 9)).toBe(9);
});

test('reverses string', () => {
  expect(calculator(0, '+', 20)).toBe(20);
});

test('reverses string', () => {
  expect(calculator(10, '-', 15)).toBe(-5);
});

test('reverses string', () => {
  expect(calculator(-1, '*', 6)).toBe(-6);
});

test('reverses string', () => {
  expect(calculator(11, '/', 2)).toBe(5.5);
});