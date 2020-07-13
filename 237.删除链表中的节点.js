/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 思路
// node -> node -> node ->
// 4 --> 5 --> 1 --> 9
// // change
// // 先把要删除的node的下一个node的值赋给自己
// 4 --> 1 --> 1 --> 9
// // 然后把要删除的node 的next 指向 node的下一个节点的下一个节点
// 4 ---> 1 (---> 1 这里是被删除了) ---> 9
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
// @lc code=end

