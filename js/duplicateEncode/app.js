function duplicateEncode(word) {
  const characters = word.toLowerCase().split('');
  let encodedWord = '';
  for (let i = 0; i < word.length; i++) {
    var prevElements = getPrevElements(characters, i);
    var nextElements = getNextElements(characters, i);
    var prevIndex = prevElements.indexOf(characters[i]);
    var nextIndex = nextElements.indexOf(characters[i]);
    encodedWord += encode(isUnique(prevIndex, nextIndex));
  }

  return encodedWord;
}

const encode = (isUnique) => (isUnique ? '(' : ')');
const isUnique = (prevIndex, nextIndex) => prevIndex === -1 && nextIndex === -1;
const getPrevElements = (array, index) => array.slice(0, index);
const getNextElements = (array, index) => array.slice(index + 1);

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
