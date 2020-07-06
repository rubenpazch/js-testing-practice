function reverseString(input) {
  const stringArray = input.split('');
  let newString = '';
  for (let i = 0; i < stringArray.length; i += 1) {
    newString = stringArray[i] + newString;
  }
  return newString;
}

module.exports = reverseString;