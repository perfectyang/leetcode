/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(y, x) {
  // [
  //   [a, b, c]
  //   [e, f, g]
  // ]
  // ['','', 1]
  // [1, 1, '']  arr[i][y] = 
  const arr = []
  for (let j = 0; j < x; j++) {
    arr[i][y - 1] = 1
  }
  for (let i = 0; i < y; i++) {
    arr[x - 1][i] = 1
  }
};
// @lc code=end

