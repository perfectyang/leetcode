/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// 广度遍历，把路径记录下来
// var maxDepth = function(root) {
//   if (!root) return 0
//   let stack = [root]
//   let paths = []
//   while (stack.length) {
//     let num = stack.length
//     let tem = []
//     for (let i = 0; i < num; i++) {
//       let node = stack.shift()
//       tem.push(node.val)
//       if (node.left) {
//         stack.push(node.left)
//       }
//       if (node.right) {
//         stack.push(node.right)
//       }
//     }
//     paths.push(tem)
//   }
//   return paths.length;
// };
var maxDepth = function(root) {
  if (!root) return 0
  const l = maxDepth(root.left)
  const r = maxDepth(root.right)
  return (l > r ? l : r) + 1
  // 这里一直迭加 + 1 + 1 + 1.....
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// @lc code=end

