export function longestSubstringWithoutRepeating(str) {
  let leftBookend = 0
  let maxLength = 0
  // use a Map to keep track of chars at index so we know if reach a dupe
  let charMap = new Map() // { character: index }

  for (let rightBookend = 0; rightBookend < str.length; rightBookend++) {
    const currentChar = str[rightBookend]

    if (charMap.has(currentChar) && charMap.get(currentChar) >= leftBookend) {
      leftBookend = charMap.get(currentChar) + 1
    }

    charMap.set(currentChar, rightBookend)

    maxLength = Math.max(maxLength, rightBookend - leftBookend + 1)
  }

  return maxLength
}

/**
 * We define a name chain like so:

A name is a composite type containing first_name and last_name strings. For example, in TS we can represent it in this way:

class Name {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

Names A and B form a name chain if A.lastName === B.firstName
Names A, B, and C form a name chain if A.lastName === B.firstName and B.lastName === C.firstName, and so on and so forth.
Given a list of names, return the length of the longest name chain that can be formed using names in the list.

You may assume any convenient representation for an input name, tuples or objects are both fine. You may, of course, use intermediate data structures to store names if you find it helpful.

Assume that the input list will not contain duplicate names, ex: [['bob', 'ross'], ['bob', 'ross']]

Assume that the input list will not contain cyclical name chains, ex: [['bob', 'ross'], ['ross', 'bob']]

function longestNameChain(names: Name[]): number {
  ...
}
 */

export function longestNameChain(names) {
  if (!names.length) return 0

  // create a map of first names to full names so we can easily find potential next names in the chain
  const firstNameChains = new Map()
  names.forEach((fullName) => {
    const firstName = fullName[0]
    if (!firstNameChains.has(firstName)) {
      firstNameChains.set(firstName, [fullName])
    } else {
      firstNameChains.get(firstName).push(fullName)
    }
  })
  // This ^ will build a map like { 'firstName': [ [firstName, lastName1], [firstName, lastName2] ] }

  // use a Map to memoize longest chain length for each name so we don't have to recalculate it multiple times
  const chainLengthMap = new Map()
  // recursive function to calculate longest chain length for a given name
  function longestChainLength(fullName) {
    const firstName = fullName[0]
    const lastName = fullName[1]
    const name = `${firstName}-${lastName}`

    if (chainLengthMap.has(name)) return chainLengthMap.get(name)

    let maxNameLength = 1
    const potentialNextNames = firstNameChains.get(lastName) || []
    potentialNextNames.forEach((fullName) => {
      maxNameLength = Math.max(maxNameLength, longestChainLength(fullName) + 1)
    })
    chainLengthMap.set(name, maxNameLength)

    return maxNameLength
  }

  // calculate longest chain length for each name and keep track of max
  let maxChainLength = 0
  names.forEach((fullName) => {
    maxChainLength = Math.max(maxChainLength, longestChainLength(fullName))
  })

  return maxChainLength
}
