const mathOperations = require('./calculator');

describe("Calculator tests", () => {

  test('adding 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });

  test('adding 1 + 5 should return 6', () => {
    let result = mathOperations.sum(1, 5)
    expect(result).toBe(6);
  });

  test('subtracting 2 from 10 should return 8', () => {
    let result = mathOperations.diff(10, 2);
    expect(result).toBe(8);
  })


  test('string Matchers',() => {
    var string1 = 'software testing help';

    expect(string1).toMatch(/ test/);

    expect(string1).toMatch(/abc/)
  })

})


