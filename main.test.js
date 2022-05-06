const func = require('./main');

test('Outputs III', () => {
  expect(func(3)).toBe('III');
});

test('Outputs IV', () => {
  expect(func(4)).toBe('IV');
});

test('Outputs IX', () => {
  expect(func(9)).toBe('IX');
});