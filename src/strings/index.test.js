import { describe, expect, test } from 'vitest'
import { longestSubstringWithoutRepeating, longestNameChain } from '.'

/*
Given a string s, find the length of the longest substring
without repeating characters.

A substring must be contiguous.
Return the length.
*/

describe('longestSubstringWithoutRepeating', () => {
  test('basic case', () => {
    expect(longestSubstringWithoutRepeating('abcabcbb')).toBe(3)
    // "abc"
  })

  test('all same characters', () => {
    expect(longestSubstringWithoutRepeating('bbbbb')).toBe(1)
  })

  test('mixed repeats', () => {
    expect(longestSubstringWithoutRepeating('pwwkew')).toBe(3)
    // "wke"
  })

  test('empty string', () => {
    expect(longestSubstringWithoutRepeating('')).toBe(0)
  })

  test('single character', () => {
    expect(longestSubstringWithoutRepeating('a')).toBe(1)
  })

  test('no repeats', () => {
    expect(longestSubstringWithoutRepeating('abcdef')).toBe(6)
  })

  test('repeats at boundaries', () => {
    expect(longestSubstringWithoutRepeating('abba')).toBe(2)
  })

  test('long complex string', () => {
    expect(longestSubstringWithoutRepeating('dvdf')).toBe(3)
  })

  test('spaces count as characters', () => {
    expect(longestSubstringWithoutRepeating('a b c a b')).toBe(3)
  })

  test('numbers and symbols', () => {
    expect(longestSubstringWithoutRepeating('123@123!')).toBe(5)
  })
})

/*
Names form a chain if:
A.lastName === B.firstName

Return length of longest possible chain.
*/

describe('longestNameChain', () => {
  test('example case from prompt', () => {
    const input = [
      ['bob', 'ross'],
      ['ross', 'miller'],
      ['brown', 'cow'],
      ['ross', 'brown'],
    ]
    expect(longestNameChain(input)).toBe(3)
  })

  test('empty input', () => {
    expect(longestNameChain([])).toBe(0)
  })

  test('single name', () => {
    const input = [['bobby', 'bob']]
    expect(longestNameChain(input)).toBe(1)
  })

  test('simple straight chain', () => {
    const input = [
      ['anna', 'bob'],
      ['bob', 'casey'],
      ['casey', 'dean'],
    ]
    expect(longestNameChain(input)).toBe(3)
  })

  test('two separate chains, choose longest', () => {
    const input = [
      ['a', 'b'],
      ['b', 'c'],
      ['x', 'y'],
      ['y', 'z'],
      ['z', 'w'],
    ]
    expect(longestNameChain(input)).toBe(3)
  })

  test('no possible chains', () => {
    const input = [
      ['alice', 'smith'],
      ['bob', 'jones'],
      ['carol', 'white'],
    ]
    expect(longestNameChain(input)).toBe(1)
  })

  test('branching options', () => {
    const input = [
      ['a', 'b'],
      ['b', 'c'],
      ['b', 'd'],
      ['c', 'e'],
      ['d', 'f'],
      ['e', 'g'],
    ]
    // longest: a,b -> b,c -> c,e -> e,g = 4
    expect(longestNameChain(input)).toBe(4)
  })

  test('multiple possible starting points', () => {
    const input = [
      ['x', 'y'],
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'd'],
      ['y', 'z'],
    ]
    // longest: a,b -> b,c -> c,d = 3
    expect(longestNameChain(input)).toBe(3)
  })

  test('longer chain mixed order', () => {
    const input = [
      ['john', 'mike'],
      ['mike', 'anna'],
      ['anna', 'steve'],
      ['steve', 'lucas'],
      ['lucas', 'zoe'],
    ]
    expect(longestNameChain(input)).toBe(5)
  })

  test('chain with dead ends', () => {
    const input = [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'd'],
      ['x', 'y'], // dead chain
    ]
    expect(longestNameChain(input)).toBe(3)
  })
})
