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
