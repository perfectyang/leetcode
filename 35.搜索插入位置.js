/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   let idx = nums.indexOf(target)
//   if (idx > -1) {
//     return idx
//   } else {
//     let i = 0;
//     while (i < nums.length) {
//       if (target < nums[i]) {
//         // nums.splice(i, 0, target)
//         break;
//       }
//       i++;
//     }
//     return i--;
//   }
// };
// 二分查找模板
// var arr = [4, 5, 6, 9, 10, 16]
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    // let mid = Math.floor((r + l) / 2);
    // let mid = ((r - l)>>1) + l
    let mid = Math.floor(((r - l) / 2) + l);
    if (target < nums[mid]) {
      r = mid - 1;
    } else if (target > nums[mid]) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return l;
}
// console.log(searchBinary(arr, 10))
// @lc code=end

