/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
    }
  }
  return i;
  // nums.length = i;
  // return nums
};
// console.log(removeElement([{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 2}], 2))
// @lc code=end

