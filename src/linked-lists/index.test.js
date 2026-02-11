import { expect, test, describe } from 'vitest'
import { Node, reverseLinkedList } from '.'

describe('Reverse a linked list', () => {
  test('Reverse a linked list with multiple nodes', () => {
    const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

    const reversedList = reverseLinkedList(list)

    expect(reversedList).toEqual(
      new Node(5, new Node(4, new Node(3, new Node(2, new Node(1))))),
    )
  })

  test('Reverse a single node', () => {
    const list = new Node(1)
    const reversedList = reverseLinkedList(list)
    expect(reversedList.value).toBe(1)
    expect(reversedList.next).toBeNull()
  })

  test('Reverse a two-node list', () => {
    const list = new Node(1, new Node(2))
    const reversedList = reverseLinkedList(list)
    expect(reversedList.value).toBe(2)
    expect(reversedList.next.value).toBe(1)
    expect(reversedList.next.next).toBeNull()
  })

  test('Reverse a list with duplicate values', () => {
    const list = new Node(5, new Node(5, new Node(5)))
    const reversedList = reverseLinkedList(list)
    expect(reversedList.value).toBe(5)
    expect(reversedList.next.value).toBe(5)
    expect(reversedList.next.next.value).toBe(5)
    expect(reversedList.next.next.next).toBeNull()
  })

  test('Reverse a longer list', () => {
    const list = new Node(
      1,
      new Node(
        2,
        new Node(3, new Node(4, new Node(5, new Node(6, new Node(7))))),
      ),
    )
    const reversedList = reverseLinkedList(list)

    const values = []
    let current = reversedList
    while (current) {
      values.push(current.value)
      current = current.next
    }
    expect(values).toEqual([7, 6, 5, 4, 3, 2, 1])
  })

  test('Reverse list with negative values', () => {
    const list = new Node(-1, new Node(-2, new Node(-3)))
    const reversedList = reverseLinkedList(list)
    expect(reversedList.value).toBe(-3)
    expect(reversedList.next.value).toBe(-2)
    expect(reversedList.next.next.value).toBe(-1)
  })

  test('Reverse list with mixed positive and negative values', () => {
    const list = new Node(-5, new Node(3, new Node(-1, new Node(0))))
    const reversedList = reverseLinkedList(list)

    const values = []
    let current = reversedList
    while (current) {
      values.push(current.value)
      current = current.next
    }
    expect(values).toEqual([0, -1, 3, -5])
  })
})
