export class LRU_Array_Cache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = []
  }

  get(key) {
    // search for key
    for (let i = 0; i < this.cache.length; i++) {
      //  key found
      if (this.cache[i][0] === key) {
        // remove from current position
        let tmp = this.cache.splice(i, 1)[0]
        // move to end to mark as most recent
        this.cache.push(tmp)
        // return value
        return tmp[1]
      }
    }
    // key not found
    return -1
  }

  put(key, value) {
    // check if key already exists
    for (let i = 0; i < this.cache.length; i++) {
      // key already exists
      if (this.cache[i][0] === key) {
        // remove existing key
        this.cache.splice(i, 1)
        // add to end as most recent
        this.cache.push([key, value])
        // updated existing key, no need to check capacity
        return
      }
    }

    // capacity exceeded
    if (this.cache.length === this.capacity) {
      // evict least recently used
      this.cache.shift()
    }

    // add to end as most recent
    this.cache.push([key, value])
  }
}

export class LRU_Map_Cache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    // key not found
    if (!this.cache.has(key)) return -1
    // key found, move to end to mark as most recent
    const value = this.cache.get(key)
    // delete and re-insert to update order
    this.cache.delete(key)
    // re-insert to end
    this.cache.set(key, value)
    // return value
    return value
  }

  put(key, value) {
    // if key already exists, delete it to update order
    if (this.cache.has(key)) {
      this.cache.delete(key)
      // else if capacity exceeded
    } else if (this.cache.size === this.capacity) {
      // evict least recently used (first key in Map)
      const firstKey = this.cache.keys().next().value
      // delete first key
      this.cache.delete(firstKey)
    }
    // add to end as most recent
    this.cache.set(key, value)
  }
}
