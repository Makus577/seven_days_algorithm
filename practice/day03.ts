/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 解题思路：
 * 先定义一个空链接，再定义一个temp指向其中一个链表，循环比较两个链表的值，将temp的下一个指向
 * 小的值，对应的链表自动next，最后当一共链表为空时，跳出循环，将temp指向剩余非空链表，最后
 * 返回这个新链表
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
      return l2
  }
  if (!l2) {
      return l1
  }
  let temp = new ListNode(-1)
  let current = temp
  while (l1 && l2) {
      if (l1.val > l2.val) {
          temp.next = l2
          l2 = l2.next
      } else {
          temp.next = l1
          l1 = l1.next
      }
      temp = temp.next
  }
  temp.next = l1 ? l1 : l2
  return current.next
};