/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const mergedList = new ListNode();
  let current = mergedList

  while (l1 && l2) {

    current.next = l1.val > l2.val ? l2 : l1;
    if(l1.val > l2.val) {
        l2 = l2.next
    } else {
        l1 = l1.next
    }

    current = current.next
  }

  current.next = l1 || l2

  return mergedList.next;
}
// @lc code=end
