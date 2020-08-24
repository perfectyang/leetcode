/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  //  if (N <= 1) {
  //    return 1
  //  }
   if (N === 1) return 1
   if (N === 2) return 2
   return fib(N-1) + fib(N-2)
};
// @lc code=end

// console.log(fib(8))

function getLen(target) {
  let a = target
  const b = 8
  const result = []
  while(a >= b) {
    const left = a%b
    console.log(a, b, left)
    result.unshift(left)
    a = Math.floor(a/b)
  }
  result.unshift(a)
  console.log(result.join(''))
  return result.length
}

getLen(123)
// 1111011 --- 123
// 10011010010--1234
