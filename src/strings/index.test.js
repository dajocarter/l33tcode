import { describe, expect, test } from 'vitest'
import { longestSubstringWithoutRepeating } from '.'

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
