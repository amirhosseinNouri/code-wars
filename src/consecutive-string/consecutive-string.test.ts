import consecutiveString from './consecutive-string';

test('consecutiveString test', () => {
  expect(
    consecutiveString(
      ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'],
      2,
    ),
  ).toBe('folingtrashy');

  expect(
    consecutiveString(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
  ).toBe('abigailtheta');
  expect(
    consecutiveString(
      [
        'ejjjjmmtthh',
        'zxxuueeg',
        'aanlljrrrxx',
        'dqqqaaabbb',
        'oocccffuucccjjjkkkjyyyeehh',
      ],
      1,
    ),
  ).toBe('oocccffuucccjjjkkkjyyyeehh');

  expect(
    consecutiveString(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
  ).toBe('ixoyx3452zzzzzzzzzzzz');

  expect(consecutiveString([], 2)).toBe('');
  expect(consecutiveString(['a', 'b', 'c'], -1)).toBe('');
});
