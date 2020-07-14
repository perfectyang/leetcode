/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 内置函数查找--->效率只有7%
// var twoSum = function(nums, target) {
//   const len = nums.length
//   if (len === 0) return []
//   for (let i = 0; i < len; i++) {
//     const leftNum = target - nums[i]
//     const position = nums.lastIndexOf(leftNum)
//     if (position > -1 && i !== position) {
//       return [i, position]
//     }
//   }
//   return []
// };
// 有哈希表查找，时间O(1)
var twoSum = function(nums, target) {
  const len = nums.length;
  if (len === 0) return []
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const leftTarget = target - nums[i]
    if (map.has(leftTarget)) {
      return [i, map.get(leftTarget)]
    }
    map.set(nums[i], i)
  }
  return []
}
