export class Node {
	constructor() {
		this.value = 0;
		this.next = null;
	}
}

export function reverseLinkedList(list) {
	let reversedList = list;
	let restOfList = list.next;
	reversedList.next = null;

	while (restOfList) {
		const temp = restOfList;
		restOfList = restOfList.next;
		temp.next = reversedList;
		reversedList = temp;
	}

	return reversedList;
}
