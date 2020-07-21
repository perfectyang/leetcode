/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**P
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  let L = minDepth(root.left)
  let R = minDepth(root.right)
  // return 1 + (Math.min(L, R) || Math.max(L, R))
  return (L === 0 || R === 0) ? L + R + 1 : Math.min(L, R) + 1;
};
// @lc code=end

