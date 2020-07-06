const cesarCypher = require('./cesarCypher');
const cesarUnCypher = require('./cesarUnCypher');

test('Encrypting test', () => {
  expect(cesarCypher('testing the cypher', 8)).toBe('bmabqvo bpm kgxpmz')
})

test('Encrypting test', () => {
  expect(cesarUnCypher('bmabqvo bpm kgxpmz', 8)).toBe('testing the cypher')
})

test('Encrypting test', () => {
  expect(cesarCypher('Microverse is AWESOME', 12)).toBe('Yuodahqdeq ue MIQEAYQ')
})

test('Encrypting test', () => {
  expect(cesarUnCypher('Yuodahqdeq ue MIQEAYQ', 12)).toBe('Microverse is AWESOME')
})