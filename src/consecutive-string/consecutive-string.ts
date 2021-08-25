function consecutiveString(words: Array<string>, k: number) {
  if (k <= 0) {
    return '';
  }

  let longest = '';
  for (let i = 0; i <= words.length - k; i++) {
    const combination = words
      .slice(i, i + k)
      .reduce((res, curr) => res + curr, '');
    if (combination.length > longest.length) {
      longest = combination;
    }
  }

  return longest;
}
export default consecutiveString;
