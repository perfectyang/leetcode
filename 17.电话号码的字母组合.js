/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  const obj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  const result = [];
  !(function(digits, obj, res, i){
    if (i === digits.length) {
      result.push(res)
      return
    }
    const letter = obj[digits[i]]
    for (let j = 0; j < letter.length; j++) {
      arguments.callee(digits, obj, res + letter[j], i + 1) 
    }
  })(digits, obj, "", 0)
  return result;
};
// @lc code=end

