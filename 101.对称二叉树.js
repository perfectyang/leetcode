/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   if (root === null) return true
//   let node = [root.left, root.right]
//   while (node.length) {
//     const rTree = node.pop() // 右子树
//     const lTree = node.pop() // 左子树
//     if (lTree === rTree) continue
//     if (lTree && rTree && lTree.val === rTree.val) {
//       node.push(lTree.left, rTree.right, lTree.right, rTree.left)
//     } else {
//       return false
//     }
//   }
//   return true
// };
function isSymmetricRecurse(l, r) {
  if (l === null && r === null) return true
  if (l === null || r === null) return false
  return (l.val === r.val) && isSymmetricRecurse(l.left, r.right) && isSymmetricRecurse(l.right, r.left)
}
var isSymmetric  = function (root) {
  if (root === null) return true
  return isSymmetricRecurse(root.left, root.right)
}

// @lc code=end

