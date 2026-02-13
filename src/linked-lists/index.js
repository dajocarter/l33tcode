export class Node {
  constructor(value = 0, next = null) {
    this.value = value
    this.next = next
  }
}

export function reverseLinkedList(list) {
  let reversedList = list
  let restOfList = list.next
  reversedList.next = null

  while (restOfList) {
    const temp = restOfList
    restOfList = restOfList.next
    temp.next = reversedList
    reversedList = temp
  }

  return reversedList
}

export function mergeLinkedLists(listA, listB) {
  if (!listA) {
    return listB
  } else if (!listB) {
    return listA
  }

  const result = new Node()
  let current = result

  while (listA && listB) {
    if (listA.value <= listB.value) {
      current.next = listA
      listA = listA.next
    } else {
      current.next = listB
      listB = listB.next
    }
    current = current.next
  }

  // now one list has run out so add the remaining nodes from the other list
  current.next = listA || listB

  return result.next
}
