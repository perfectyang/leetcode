/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let max
  const result = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    max = max || nums[0]
    for (let j = i; j < i + k; j++) {
      if (max < nums[j]) {
        max = nums[j]
      }
    }
    result.push(max)
  }
  return result
};
// @lc code=end

