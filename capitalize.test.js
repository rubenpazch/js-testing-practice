const capitalizee = require('./capitalize');

test('first letter uppercase', () => {
  expect(capitalizee('practice')).toBe('Practice');
});

test('first letter uppercase', () => {
  expect(capitalizee('')).toBe('');
});