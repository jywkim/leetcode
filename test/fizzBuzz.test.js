const func = require('../javascript/fizzBuzz');

test('Input 3 Outputs ["1","2","Fizz"]', () => {
    expect(func(3)).toStrictEqual(["1","2","Fizz"]);
});

test('Input 15 Outputs ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]', () => {
    expect(func(15)).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
});