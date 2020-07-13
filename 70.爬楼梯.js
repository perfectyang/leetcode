/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 解法一
  // const dp = []
  // dp[0] = 1
  // dp[1] = 1
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2]
  // }
  // return dp[n]
  // 解法二 
  // let pre = 1
  // let preOffpre = 1
  // let cur = 1
  // for (let i = 2; i<= n; i++) {
  //   cur = pre + preOffpre
  //   preOffpre = pre
  //   pre = cur 
  // }
  // return cur
  // 解法三 -与 解法二，就是少用一个临时变量 
  let a =1,
      b = 1;
  while(n--) {
    a = (b += a) - a
  }
  return a

  // a, b = 1, 1 

  // n = 1 a = 1, b = 2 ---> 1
  // n = 2 a = 2, b = 3 ---> 2
  // n = 3 a = 3, b = 5 ---> 3


  
  

};
// @lc code=end

