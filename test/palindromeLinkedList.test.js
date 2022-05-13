const {isPalindrome, createLinkedList} = require('../javascript/palindromeLinkedList');

 describe("Palindrome Linked List", () => {
  const input = [1,2,2,1]
  const output = true
  test('Input: ' + input + ', Output: ' + output, () => {
      let head = createLinkedList(input)
      expect(isPalindrome(head)).toEqual(output);
  });

  const input2 = [1,2];
  const output2 = false
  test('Input: ' + input2 + ', Output: ' + output2, () => {
      let head = createLinkedList(input2)
      expect(isPalindrome(head)).toEqual(output2);
  });
});
