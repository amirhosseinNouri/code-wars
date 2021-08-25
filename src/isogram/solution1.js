function isIsogram(str) {
  if (str === '') {
    return true;
  }

  const letters = str.toLowerCase().split('');
  const set = new Set(letters);

  return letters.length === set.size;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
