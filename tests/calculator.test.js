const mathOperations = require('./calculator');
let input = 0;
describe("Calculator tests", () => {

  beforeAll(() => {
    console.log(' this will only run one time at the beggining before all test');
  })

  afterAll(() => {
    console.log('this will run after all the test but does it run after  every each?, if so input will be 7?', input);
  })

  beforeEach(() => {
    console.log("beforeEach called");
    input++;
  });

  afterEach(()=> {
    console.log(input,'input after')
  })

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

  test('equality matchers', () => {
    expect(5*5).toBe(25);
    expect(100-20).not.toBe(432);
  })

  test('truthy operators', () => {
    let name ="NAME OF A NAME";
    let n = null;
    expect(n).toBeNull();
    expect(name).not.toBeNull();
    expect(name).toBeTruthy();
    expect(n).toBeFalsy();
  })

  test('numeric operators', () => {
    expect(100).toBeGreaterThan(99);
    expect(-20).toBeLessThan(50);
    expect(50).toBeLessThanOrEqual(50);
    expect(50).toBeGreaterThanOrEqual(50);
  })

  test('string Matchers',() => {
    var string1 = 'software testing help';

    expect(string1).toMatch(/ test/);
    expect(string1).toMatch(/a/);
  })


})


