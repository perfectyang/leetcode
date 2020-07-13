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
// var isValid = function(s) {
//   // 如果不是偶数出现，则无法配成双对
//   if (s.length % 2) return false
//   const map = {
//     '(': ')',
//     '{': '}',
//     '[': ']'
//   }
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     const tem = s[i]
//     if (map[tem]) {
//       stack.push(tem)
//     } else {
//       // if (!stack.length) return false
//       const topEl = stack.pop()
//       if (map[topEl] !== tem) {
//         return false
//       }
//     }
//     // if (!stack.length) {
//     //   stack.push(tem)
//     // } else {
//     //   const topEl = stack[stack.length - 1]
//     //   if (topEl === map[tem]) {
//     //     stack.length = stack.length - 1
//     //   } else {
//     //     stack.push(tem)
//     //   }
//     // }
//   }
//   return !!!stack.length
// };  []   ]]]]]]

var  isValid  = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')')
        break;
      case '{':
        stack.push('}')
        break;
      case '[':
        stack.push(']')
        break;
      case ')':
      case '}':
      case ']':
        if (stack.length === 0 || stack.pop() !== s[i]) {
          return false
        }
        break;
    }
  }
  return !!!stack.length
}
// @lc code=end

