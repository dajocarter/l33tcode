export function maxMeetings(S, F) {
  const meetings = S.map((start, index) => ({
    start,
    finish: F[index],
    index: index + 1,
  }))

  meetings.sort((a, b) => a.finish - b.finish)

  let result = [meetings[0].index]
  let lastFinish = meetings[0].finish
  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i].start >= lastFinish) {
      result.push(meetings[i].index)
      lastFinish = meetings[i].finish
    }
  }
  return result
}

export function mergeOverlappingIntervals(intervals) {
  if (intervals.length === 0) return []
  // Sort intervals based on start time
  intervals.sort((a, b) => a[0] - b[0])
  // Take the first interval and compare end of interval with start of next interval - if they overlap then merge otherwise start a new interval
  let merged = [intervals[0]]
  let endOfInterval = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= endOfInterval) {
      endOfInterval = Math.max(endOfInterval, intervals[i][1])
      merged[merged.length - 1][1] = endOfInterval
    } else {
      merged.push(intervals[i])
      endOfInterval = intervals[i][1]
    }
  }
  return merged
}

export function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0
  intervals.sort((a, b) => a[0] - b[0])
  let rooms = [intervals[0]]
  let endOfLastMeeting = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < endOfLastMeeting) {
      rooms.push(intervals[i])
    } else {
      rooms[rooms.length - 1].push(intervals[i])
    }
    endOfLastMeeting = intervals[i][1]
  }
  return rooms.length
}
