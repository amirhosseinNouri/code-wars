function duplicateEncode(word) {
  const characters = word.toLowerCase().split('');
  let encodedWord = '';
  for (let i = 0; i < word.length; i++) {
    encodedWord += encode(isUnique(characters, characters[i]));
  }

  return encodedWord;
}

const encode = (isUnique) => (isUnique ? '(' : ')');
const isUnique = (arr, character) =>
  arr.indexOf(character) === arr.lastIndexOf(character);
