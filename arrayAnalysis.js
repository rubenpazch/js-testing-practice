function arrayAnalysis(array) {

  let min = Math.min(...array);
  let max = Math.max(...array);
  let lengthh = array.length;
  let average = array.reduce((a,b) => a+b, 0)/lengthh;
  let object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0
  };
  
  object.average = average;
  object.min = min;
  object.max = max;
  object.length = lengthh;

  return object;
}



module.exports = arrayAnalysis