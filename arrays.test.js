import { arrayLength } from './arrays';

describe('arrayLength', () => {
  test('should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 1 when argument is [4]', () => {
    const x = [4];
    const expected = 1;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [false, false, false]', () => {
    const x = [false, false, false];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [undefined, undefined, undefined]', () => {
    const x = [undefined, undefined, undefined];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [[], [], []]', () => {
    const x = [[], [], []];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 3 when argument is [{}, {}, {}]', () => {
    const x = [{}, {}, {}];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});
