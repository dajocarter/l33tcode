import { expect, test } from "vitest";
import { Node, reverseLinkedList } from ".";

test("Reverse a linked list", () => {
	const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

	const reversedList = reverseLinkedList(list);

	expect(reversedList).toEqual(
		new Node(5, new Node(4, new Node(3, new Node(2, new Node(1))))),
	);
});
