/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// var hasPathSum = function(root, sum) {
//   const result = []
//   if (!root) return false
//   !(function(node, result, path){
//     // path = path ? path + '->' + node.val : String(node.val)
//     path = path + node.val
//     if (node.left === null && node.right === null) {
//       result.push(path === sum)
//       return
//     }
//     if (node.left) {
//       arguments.callee(node.left, result, path)
//     }
//     if (node.right) {
//       arguments.callee(node.right, result, path)
//     }
//   })(root, result, 0)
//   return result.some(Boolean)
// };
var hasPathSum = function(root, sum) {
  if (root === null) return false;
  if (root.left === null && root.right === null && sum - root.val === 0) return true;
  return arguments.callee(root.left, sum - root.val) || arguments.callee(root.right, sum - root.val);
}
// @lc code=end

