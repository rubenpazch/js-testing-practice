function calculator(num1, operation, num2) {
  let result;
  switch(operation){
    case "+":
      result = num1 + num2;
    break;
    case "-":
      result = num1 - num2;
    break;
    case "*":
      result = num1 * num2;
    break;
    case "/":
      result = num1 / num2;
    break;
  }
  return result;
}

module.exports = calculator