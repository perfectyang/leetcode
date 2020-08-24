/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.keys = []
};

function remove(list, key) {
  const idx = list.indexOf(key)
  if (idx > -1) {
    list.splice(idx, 1)
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const val = this.cache.get(key)
    remove(this.keys, key)
    this.keys.push(key)
    return val
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.set(key, value)
    remove(this.keys, key)
    this.keys.push(key)
  } else {
    this.keys.push(key)
    this.cache.set(key, value)
    if (this.keys.length > this.capacity) {
      const deleteKey = this.keys[0]
      remove(this.keys, deleteKey)
      this.cache.delete(deleteKey)
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

