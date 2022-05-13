const {isSymmetric, createTree} = require('../javascript/symmetricTree');

describe("Symmetric Tree", () => {
    const input = [1,2,2,3,4,4,3];
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        let head = createTree(input)
        expect(isSymmetric(head)).toEqual(output);
    });

    const input2 = [1,2,2,null,3,null,3];
    const output2 = false;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        let head = createTree(input2)
        expect(isSymmetric(head)).toEqual(output2);
    });
});
