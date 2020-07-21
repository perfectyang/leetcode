/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function(numRows) {
//   var result = [];
//   for (var i = 0; i < numRows; i++) {
//     var row = [];
//     for (var j = 0; j < i + 1; j++) {
//       if (j === 0 || j === i) {
//         // 这里生成周围边沿的1
//         row.push(1)
//       } else {
//         var lastItem = result[i - 1];
//         row.push(lastItem[j - 1] + lastItem[j])
//       }
//     }
//     result.push(row)
//   }
//   return result;
// };


var generate = function(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    let row =[]
    row[0] = 1
    row[i] = 1
    if (i > 1) {
      for (let j = 1; j < i; j++) {
        const lastItem = result[i - 1]
        row[j] = lastItem[j - 1] + lastItem[j]
      }
    }
    result.push(row)
  }
  return result;
}
