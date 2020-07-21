/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = []
  let last = []
  for (let i = 0; i < rowIndex + 1; i++) {
    last = result
    result = []
    result[0] = 1
    result[i] = 1
    if (i > 1) {
      for (j = 1; j < i; j++) {
        result[j] = last[j - 1] + last[j]
      }
    }
  }
  return result;
};

// @lc code=end

