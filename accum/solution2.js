const accum = (str) =>
  str
    .toLowerCase()
    .split('')
    .map((letter, index) => letter.toUpperCase() + letter.repeat(index))
    .join('-');

console.log(accum('abcd') === 'A-Bb-Ccc-Dddd');
console.log(accum('RqaEzty') === 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
console.log(accum('cwAt') === 'C-Ww-Aaa-Tttt');
