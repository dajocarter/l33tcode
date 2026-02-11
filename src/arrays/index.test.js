import { describe, expect, test } from "vitest";
import { maxMeetings, mergeOverlappingIntervals } from ".";

describe("Max meetings for one room", () => {
	test("Simple values", () => {
		const S = [1, 3, 0, 5, 8, 5];
		const F = [2, 4, 6, 7, 9, 9];
		const result = maxMeetings(S, F);
		expect(result).toEqual([1, 2, 4, 5]);
	});
	test("Complex values", () => {
		const S = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
		const F = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];
		const result = maxMeetings(S, F);
		expect(result).toEqual([6, 7, 1]);
	});
});

describe("Merge overlapping intervals", () => {
	test("Simple example", () => {
		const intervals = [
			[1, 3],
			[2, 6],
			[8, 10],
			[15, 18],
		];
		const result = mergeOverlappingIntervals(intervals);
		expect(result).toEqual([
			[1, 6],
			[8, 10],
			[15, 18],
		]);
	});
});
