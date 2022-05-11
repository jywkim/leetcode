const func = require('../javascript/reverseLinkedList');

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
 
describe("Reverse Linked List", () => {
    const input = [1,2,3,4,5];
    const output = [5,4,3,2,1];
    test('Input: ' + input + ', Output: ' + output, () => {
        let head = createLinkedList(input)
        let outputList = createLinkedList(output)
        expect(func(head)).toEqual(outputList);
    });

    const input2 = [1,2];
    const output2 = [2,1];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        let head = createLinkedList(input2)
        let outputList = createLinkedList(output2)
        expect(func(head)).toEqual(outputList);
    });

    const input3 = [];
    const output3 = [];
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        let head = createLinkedList(input3)
        let outputList = createLinkedList(output3)
        expect(func(head)).toEqual(outputList);
    });
});
