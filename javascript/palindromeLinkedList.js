var isPalindrome = function(head) {
    let current = "", reverse = "";
    while (head != null) {
        current += head.val;
        reverse = head.val + reverse;
        head = head.next;
    }
    return current === reverse;
};

var ListNode = function(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
var createLinkedList = function(array) {
    return array.reverse().reduce((acc, curr) => {
        if (acc == null) {
            acc = new ListNode(curr);
        } else {
            acc = new ListNode(curr, acc);
        }
        return acc;
        }, null);
}
  
module.exports = {isPalindrome, createLinkedList};