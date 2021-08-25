const accum = (str) =>
  str
    .toLowerCase()
    .split('')
    .map((letter, index) => letter.repeat(index + 1))
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join('-');

console.log(accum('abcd') === 'A-Bb-Ccc-Dddd');
console.log(accum('RqaEzty') === 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
console.log(accum('cwAt') === 'C-Ww-Aaa-Tttt');
// console.log(accum('RqaEzty'));
// console.log('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
