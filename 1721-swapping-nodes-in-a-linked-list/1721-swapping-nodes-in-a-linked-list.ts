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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let list = [];
    while ( head && head.next) {
        list.push(head.val);
        head = head.next;
    }
    list.push(head.val);
    const first = list[k-1];
    const last = list[list.length - k];
    list.splice(k-1, 1, last);
    list.splice(list.length - k, 1, first);
    
    let newList = list.reverse().reduce((acc, curr) => {
      if (acc == null) {
        acc = new ListNode(curr);

      } else {
        acc = new ListNode(curr, acc);
      }
      return acc;
    }, null);
    
    return newList;
};