import { arrayLength, push, pop, shift, unshift } from './arrays';

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

describe('push', () => {
  test('should return 0 when no arguments apart from the original array are passed', () => {
    const x = [];
    const expected = 0;
    const r = push(x);
    expect(r).toBe(expected);
  });

  test('should return 3 when arguments are ["pigs", "chicken"] and 1', () => {
    const x = ['pigs', 'chicken'];
    const y = 1;
    const expected = 3;
    const r = push(x, y);
    expect(r).toBe(expected);
  });

  test('should return 5 when arguments are ["pigs", "chicken"] and "horses", 2 and "sheep"', () => {
    const a = ['pigs', 'chicken'];
    const b = 'horses';
    const c = 2;
    const d = 'sheep';
    const expected = 5;
    const r = push(a, b, c, d);
    expect(r).toBe(expected);
  });
});

describe('pop', () => {
  test('should return undefined when used on an empty array', () => {
    const x = [];
    const expected = undefined;
    const r = pop(x);
    expect(r).toBe(expected);
  });

  test('should return "horses" when the argument is ["pigs", "chicken", "horses"]', () => {
    const x = ['pigs', 'chicken', 'horses'];
    const expected = 'horses';
    const r = pop(x);
    expect(r).toBe(expected);
  });

  test('should return undefined when the argument is [undefined, undefined, undefined]', () => {
    const x = [undefined, undefined, undefined];
    const expected = undefined;
    const r = pop(x);
    expect(r).toBe(expected);
  });

  test('should return null when the argument is [null, null, null]', () => {
    const x = [null, null, null];
    const expected = null;
    const r = pop(x);
    expect(r).toBe(expected);
  });
});

describe('shift', () => {
  test('should return undefined when used on an empty array', () => {
    const x = [];
    const expected = undefined;
    const r = shift(x);
    expect(r).toBe(expected);
  });

  test('should return "pigs" when the argument is ["pigs", "chicken", "horses"]', () => {
    const x = ['pigs', 'chicken', 'horses'];
    const expected = 'pigs';
    const r = shift(x);
    expect(r).toBe(expected);
  });

  test('should return undefined when the argument is [undefined, undefined, undefined]', () => {
    const x = [undefined, undefined, undefined];
    const expected = undefined;
    const r = shift(x);
    expect(r).toBe(expected);
  });

  test('should return 4 when the argument is [null, null, null]', () => {
    const x = [null, null, null];
    const expected = null;
    const r = shift(x);
    expect(r).toBe(expected);
  });
});

describe.only('unshift', () => {
  test('x should return 0 when only argument is []', () => {
    const x = [];
    const expected = 0;
    const r = unshift(x);
    expect(r).toBe(expected);
  });

  test('should return 2 when arguments are [] and "perro", 8', () => {
    const x = [];
    const y = 'perro';
    const z = 8;
    const expected = 2;
    const r = unshift(x, y, z);
    expect(r).toBe(expected);
  });

  test('x should become [6, undefined, null] when arguments are [6] and undefined, null', () => {
    const x = [6];
    const y = undefined;
    const z = null;
    const expected = [6, undefined, null];
    unshift(x, y, z);
    expect(x).toStrictEqual(expected);
  });
});
