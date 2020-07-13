/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  const queue = [root]
  const result = []
  while(queue.length) {
    const num = queue.length
    const tem = []
    for (let i = 0; i < num; i++) {
      const node = queue.shift()
      tem.push(node.val) 
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(tem)
  }
  return result.reverse();
};
// @lc code=end

