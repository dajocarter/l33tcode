/*
 * There is one meeting room in a firm.
 *
 * There are N meetings in the form of (S[i], F[i]) where S[i] is the start time of meeting i and F[i] is finish time of meeting i.
 *
 * The task is to find the maximum number of meetings that can be accommodated in the meeting room.
 *
 * Print all meeting numbers.
 * */
export function maxMeetings(S, F) {
	const meetings = S.map((start, index) => ({
		start,
		finish: F[index],
		index: index + 1,
	}));

	meetings.sort((a, b) => a.finish - b.finish);

	let result = [meetings[0].index];
	let lastFinish = meetings[0].finish;
	for (let i = 1; i < meetings.length; i++) {
		if (meetings[i].start > lastFinish) {
			result.push(meetings[i].index);
			lastFinish = meetings[i].finish;
		}
	}
	return result;
}
