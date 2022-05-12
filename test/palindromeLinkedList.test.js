const func = require('../javascript/palindromeLinkedList');

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
 
 describe("Palindrome Linked List", () => {
  const input = [1,2,2,1]
  const output = true
  test('Input: ' + input + ', Output: ' + output, () => {
      let head = createLinkedList(input)
      expect(func(head)).toEqual(output);
  });

  const input2 = [1,2];
  const output2 = false
  test('Input: ' + input2 + ', Output: ' + output2, () => {
      let head = createLinkedList(input2)
      expect(func(head)).toEqual(output2);
  });
});
