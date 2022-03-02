var isPalindrome = function(head) {
    let current = "", reverse = "";
    while (head != null) {
        current += head.val;
        reverse = head.val + reverse;
        head = head.next;
    }
    return current === reverse;
};