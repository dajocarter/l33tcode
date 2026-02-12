import { describe, expect, test } from 'vitest'
import { maxMeetings, mergeOverlappingIntervals, minMeetingRooms } from '.'

/*
 * There is one meeting room in a firm.
 *
 * There are N meetings in the form of (S[i], F[i]) where S[i] is the start time of meeting i and F[i] is finish time of meeting i.
 *
 * The task is to find the maximum number of meetings that can be accommodated in the meeting room.
 *
 * Print all meeting numbers.
 * */
describe('Max meetings for one room', () => {
  test('Basic meeting schedule', () => {
    const S = [1, 3, 0, 5, 8, 5]
    const F = [2, 4, 6, 7, 9, 9]
    const result = maxMeetings(S, F)
    expect(result).toEqual([1, 2, 4, 5])
  })
  test('Greedy selection with varied timestamps', () => {
    const S = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924]
    const F = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252]
    const result = maxMeetings(S, F)
    expect(result).toEqual([6, 7, 1])
  })
  test('Single meeting', () => {
    const S = [5]
    const F = [10]
    const result = maxMeetings(S, F)
    expect(result).toEqual([1])
  })
  test('All meetings overlapping', () => {
    const S = [1, 2, 3]
    const F = [5, 6, 7]
    const result = maxMeetings(S, F)
    expect(result).toEqual([1])
  })
  test('No overlapping meetings', () => {
    const S = [1, 5, 9, 13]
    const F = [2, 6, 10, 14]
    const result = maxMeetings(S, F)
    expect(result).toEqual([1, 2, 3, 4])
  })
  test('Meetings with same finish time', () => {
    const S = [1, 2, 3]
    const F = [5, 5, 5]
    const result = maxMeetings(S, F)
    expect(result).toEqual([1])
  })
  test('Meeting starts when another finishes', () => {
    const S = [1, 2, 3, 5]
    const F = [2, 3, 5, 6]
    const result = maxMeetings(S, F)
    expect(result).toEqual([1, 2, 3, 4])
  })
  test('Unsorted input with gaps', () => {
    const S = [10, 1, 7]
    const F = [11, 3, 8]
    const result = maxMeetings(S, F)
    expect(result).toEqual([2, 3, 1])
  })
})

describe('Merge overlapping intervals', () => {
  test('Merges overlapping intervals', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ])
  })
  test('Empty array', () => {
    const intervals = []
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([])
  })
  test('Single interval', () => {
    const intervals = [[1, 5]]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([[1, 5]])
  })
  test('No overlapping intervals', () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  })
  test('All intervals overlapping', () => {
    const intervals = [
      [1, 10],
      [2, 8],
      [3, 6],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([[1, 10]])
  })
  test('Intervals with touching boundaries', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([[1, 4]])
  })
  test('Unsorted intervals', () => {
    const intervals = [
      [15, 18],
      [1, 3],
      [8, 10],
      [2, 6],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ])
  })
  test('One interval contains another', () => {
    const intervals = [
      [1, 10],
      [3, 5],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([[1, 10]])
  })
  test('Multiple contained intervals', () => {
    const intervals = [
      [1, 20],
      [2, 5],
      [7, 10],
      [15, 18],
    ]
    const result = mergeOverlappingIntervals(intervals)
    expect(result).toEqual([[1, 20]])
  })
})

/*
Question:
Given an array of meeting time intervals where intervals[i] = [start, end],
return the minimum number of conference rooms required.

A meeting cannot use a room if another meeting is in that room at the same time.
*/
describe('minMeetingRooms', () => {
  test('basic overlap', () => {
    const input = [
      [0, 30],
      [5, 10],
      [15, 20],
    ]
    expect(minMeetingRooms(input)).toBe(2)
  })

  test('no overlaps', () => {
    const input = [
      [7, 10],
      [12, 15],
      [20, 25],
    ]
    expect(minMeetingRooms(input)).toBe(1)
  })

  test('all overlapping', () => {
    const input = [
      [1, 10],
      [2, 9],
      [3, 8],
      [4, 7],
    ]
    expect(minMeetingRooms(input)).toBe(4)
  })

  test('meetings touching (no overlap)', () => {
    const input = [
      [1, 5],
      [5, 10],
      [10, 15],
    ]
    expect(minMeetingRooms(input)).toBe(1)
  })

  test('unsorted input', () => {
    const input = [
      [15, 20],
      [0, 30],
      [5, 10],
    ]
    expect(minMeetingRooms(input)).toBe(2)
  })

  test('single meeting', () => {
    const input = [[1, 5]]
    expect(minMeetingRooms(input)).toBe(1)
  })

  test('empty input', () => {
    const input = []
    expect(minMeetingRooms(input)).toBe(0)
  })
})
