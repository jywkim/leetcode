const func = require('../javascript/fizzBuzz');

describe("Fizz Buzz", () => {
    const input = 3;
    const output = ["1","2","Fizz"];
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });

    const input2 = 5;
    const output2 = ["1","2","Fizz","4","Buzz"];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });

    const input3 = 15;
    const output3 = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toEqual(output3);
    });
});
