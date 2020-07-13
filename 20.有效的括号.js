/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// )()
// [] ---> 
var isValid = function(s) {
  // 如果不是偶数出现，则无法配成双对
  if (s.length % 2) return false
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const tem = s[i]
    if (!stack.length) {
      stack.push(tem)
    } else {
      const topEl = stack[stack.length - 1]
      if (topEl === map[tem]) {
        stack.length = stack.length - 1
      } else {
        stack.push(tem)
      }
    }
  }
  return !!!stack.length
};
// @lc code=end

