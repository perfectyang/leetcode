/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
// 广度遍历 BFS
var levelOrder = function(root) {
  if (root === null) return []
  const list = [root]
  const result = []
  while(list.length) {
    const len = list.length
    const tem = []
    for (let i = 0; i < len; i++) {
      const node = list.shift()
      tem.push(node.val)
      if (node.left) {
        list.push(node.left)
      }
      if (node.right) {
        list.push(node.right)
      }
    }
    result.push(tem)
  }
  return result
};

// 深度遍历 DFS

var levelOrder = function(root) {
  const result = []
  recurse(result, root, 0)
  return result
}
function recurse(res, root, level) {
  if (root === null) return
  if (level === res.length) {
    res[level] = []
  }
  res[level].push(root.val)
  recurse(res, root.left, level + 1)
  recurse(res, root.right, level + 1)
}


// @lc code=end

