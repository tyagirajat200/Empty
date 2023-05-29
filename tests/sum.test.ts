import { describe, expect, test } from '@jest/globals';
import sum from '../sum';
import { sumt } from '../sumt';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('sumt module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sumt(1, 2)).toBe(3);
  });
});