function arrayAnalysis(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const lengthh = array.length;
  const average = array.reduce((a, b) => a + b, 0) / lengthh;
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  object.average = average;
  object.min = min;
  object.max = max;
  object.length = lengthh;

  return object;
}


module.exports = arrayAnalysis;