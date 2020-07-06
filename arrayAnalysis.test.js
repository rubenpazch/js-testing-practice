const arrayAnalysis = require('./arrayAnalysis.js');

let object = {
  average: 3.5,
  min: 1,
  max: 6,
  length: 6,
};

test('Analisys array test', () => {
  expect(arrayAnalysis([1,2,3,4,5,6])).toMatchObject(object);
});
