/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const newArr = nums1.concat(nums2).sort()
  let i = 0
  let j = 0
  while (newArr[j] !== null) {
    i += 1
    j += 2
  }
  if (newArr.length % 2) {
    return ((newArr[i] + newArr[i + 1]) / 2).toFixed(1)
  } else {
    return newArr[i]
  }
};
// [1, 2, 3, 4]
// i  -> 0
// j  -> 0
// ---------
// i  -> 1
// j  -> 2

// i  -> 2
// j  -> 4

// i  -> 3
// j  -> null
// @lc code=end

