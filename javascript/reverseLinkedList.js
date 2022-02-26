var reverseList = function(head) {
    // reverse holds reversed list
    let reverse = null;
    // tempNext is temp variable that stores remaining nodes in list at each loop
    let tempNext = null;
    // while nodes remain in list
    while (head != null) {
        // temporarily store remaining list without current node
        tempNext = head.next;
        // take current node of list, append reversed nodes to it
        head.next = reverse;
        // assign current node back to reversed list
        reverse = head;
        // assign remaining list back so head points to new current node
        // repeat until no nodes remain in list
        head = tempNext;
    }
    return reverse;
};