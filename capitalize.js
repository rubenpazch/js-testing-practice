function capitalizee(stringInput){
  let first = stringInput.charAt(0);
  let second = stringInput.slice(1,stringInput.length);
  return first.toUpperCase() + second;
}

module.exports = capitalizee