/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
// [2, 3]

var binaryTreePaths = function(root) {
  if (!root) return []
  let arr = [{node:root, path: String(root.val)}]
  let paths = []
  while(arr.length) {
    let {node, path} = arr.pop()
    if (!node.left && !node.right) {
      paths.push(path)
    }
    if (node.left) {
      arr.push({node: node.left, path: path + '->' + String(node.left.val)})
    }
    if (node.right) {
      arr.push({node: node.right, path: path + '->' + String(node.right.val)})
    }
  }
  return paths
};
// @lc code=end

