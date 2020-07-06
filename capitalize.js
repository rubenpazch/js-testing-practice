function capitalizee(stringInput) {
  const first = stringInput.charAt(0);
  const second = stringInput.slice(1, stringInput.length);
  return first.toUpperCase() + second;
}

module.exports = capitalizee;