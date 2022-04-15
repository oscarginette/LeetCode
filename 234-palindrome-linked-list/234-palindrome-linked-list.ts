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

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return true;
    
    let fast = head;
    let slow = head;
    
    // We will find the middle of the list and reverse the last part
    // then compare one by one
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    // It's important that  you get the next after slow becuase you need
    // the first of the second half
    let secondHalf = reverse(slow.next);
    let firstHalf = head;
    
    while (firstHalf !== null && secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    
    return true;
};

function reverse(head: ListNode): ListNode {
    let newHead = null;
    while (head !== null) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    
    return newHead;
}