/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
// var reverseList = function(head) {
//   if (head == null || head.next == null) {
//     return head
//   }
//   const cur = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return cur
// };
// 双指针
var reverseList = function (head) {
  let pre = null
  let cur = head
  while (cur !== null) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  return pre
}


// @lc code=end

