import validBraces from './valid-braces';

test('Simple prentices test', () => {
  expect(validBraces('()')).toBe(true);
});

test('Only open braces should return false', () => {
  expect(validBraces('(((([[[{{{')).toBe(false);
});

test('valid combination of all three kinds of braces should return true', () => {
  expect(validBraces('(([[{{()}}]]))')).toBe(true);
});
