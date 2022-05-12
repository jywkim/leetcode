var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(0);
    let headOfNewList = newList;
    while (list1 || list2) {
        if (list1 === null || list2 !== null && list2.val < list1.val) {
          headOfNewList.next = list2;
          list2 = list2.next;
        } else {
          headOfNewList.next = list1;
          list1 = list1.next;
        }
        headOfNewList = headOfNewList.next;
    }
    return newList.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

module.exports = mergeTwoLists;