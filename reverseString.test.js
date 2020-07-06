const reverseString = require('./reverseString.js');

test('reverses string', () => {
  expect(reverseString('asdf')).toBe('fdsa');
});

test('reverses string', () => {
  expect(reverseString('Miguel')).toBe('leugiM');
});

test('reverses string', () => {
  expect(reverseString('Rubén')).toBe('nébuR');
});

test('reverses string', () => {
  expect(reverseString('')).toBe('');
});