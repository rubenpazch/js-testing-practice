function cesarUnCypher(input, shift) {
  if(shift < 0)
    shift = shift * -1;

  let output = '';
  let shiftedCode = 0;
  for(let i = 0; i < input.length; i += 1) {
    shiftedCode = 0;
    let code = input.charCodeAt(i);
    if(code >= 97 && code <= 122){
      shiftedCode = code - shift;
      if(shiftedCode < 97) {
        shiftedCode = shiftedCode + 26;
      }
    } else if(code >= 65 && code <= 90) {
        shiftedCode = code - shift;
        if(shiftedCode < 65) {
          shiftedCode = shiftedCode + 26;
        }
      } else {
        shiftedCode = code;
      }
    output += String.fromCharCode(shiftedCode);
  }
  return output;
}

module.exports = cesarUnCypher
