const mathOperations = require('./calculator');

describe("Calculator tests", () => {
  test('adding 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
})

describe("Calculator fail", () => {
  test('adding 1 + 3 should return 10', () => {
    expect(mathOperations.sum(1 + 3).tobe(3));
  })
})