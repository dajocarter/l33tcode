import { describe, expect, test } from 'vitest'
import { LRU_Array_Cache, LRU_Map_Cache, LRU_LinkedList_Cache } from '.'

/*
Design and implement a data structure for Least Recently Used (LRU) cache.

Implement the LRUCache class:

- LRUCache(capacity)
- get(key) -> returns value or -1 if not found
- put(key, value) -> update or insert key

Evict least recently used item when capacity exceeded.
All operations must be O(1).
*/

const implementations = [
  { name: 'Array', Class: LRU_Array_Cache },
  { name: 'Map', Class: LRU_Map_Cache },
  { name: 'DoublyLinkedList', Class: LRU_LinkedList_Cache },
]

implementations.forEach(({ name, Class }) => {
  describe(`LRU Cache - ${name}`, () => {
    test('basic put/get', () => {
      const cache = new Class(2)

      cache.put(1, 1)
      cache.put(2, 2)

      expect(cache.get(1)).toBe(1)
      expect(cache.get(2)).toBe(2)
    })

    test('evicts least recently used', () => {
      const cache = new Class(2)

      cache.put(1, 1)
      cache.put(2, 2)
      cache.get(1) // makes 1 most recent
      cache.put(3, 3) // evicts key 2

      expect(cache.get(2)).toBe(-1)
      expect(cache.get(3)).toBe(3)
      expect(cache.get(1)).toBe(1)
    })

    test('overwrite existing key', () => {
      const cache = new Class(2)

      cache.put(1, 1)
      cache.put(1, 10)

      expect(cache.get(1)).toBe(10)
    })

    test('capacity 1', () => {
      const cache = new Class(1)

      cache.put(1, 1)
      cache.put(2, 2)

      expect(cache.get(1)).toBe(-1)
      expect(cache.get(2)).toBe(2)
    })

    test('get updates recency', () => {
      const cache = new Class(2)

      cache.put(1, 1)
      cache.put(2, 2)
      cache.get(1) // now 2 is LRU
      cache.put(3, 3)

      expect(cache.get(2)).toBe(-1)
      expect(cache.get(1)).toBe(1)
      expect(cache.get(3)).toBe(3)
    })

    test('getting missing key', () => {
      const cache = new Class(2)
      expect(cache.get(99)).toBe(-1)
    })
  })
})
