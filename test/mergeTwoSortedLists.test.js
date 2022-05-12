const func = require('../javascript/mergeTwoSortedLists');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

 function createLinkedList(array) {
    return array.reverse().reduce((acc, curr) => {
        if (acc == null) {
          acc = new ListNode(curr);
        } else {
          acc = new ListNode(curr, acc);
        }
        return acc;
      }, null);
 }
 
describe("Merge Two Sorted Lists", () => {
    const inputA = [1,2,4];
    const inputB = [1,3,4];
    const output = [1,1,2,3,4,4];
    test('Input: ' + inputA + ', Output: ' + output, () => {
      let headA = createLinkedList(inputA);
      let headB = createLinkedList(inputB);
      let outputList = createLinkedList(output)
      expect(func(headA, headB)).toEqual(outputList);
    });

    const input2A = [];
    const input2B = [];
    const output2 = [];
    test('Input: ' + input2A + ', Output: ' + output2, () => {
      let headA = createLinkedList(input2A);
      let headB = createLinkedList(input2B);
      let outputList = createLinkedList(output2)
      expect(func(headA, headB)).toEqual(outputList);
    });

    const input3A = [];
    const input3B = [0];
    const output3 = [0];
    test('Input: ' + input2A + ', Output: ' + output2, () => {
      let headA = createLinkedList(input3A);
      let headB = createLinkedList(input3B);
      let outputList = createLinkedList(output3)
      expect(func(headA, headB)).toEqual(outputList);
    });
});
