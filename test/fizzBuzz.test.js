const func = require('../javascript/fizzBuzz');

describe("Fizz Buzz", () => {
    test('Input n = 3 Outputs ["1","2","Fizz"]', () => {
        expect(func(3)).toEqual(["1","2","Fizz"]);
    });
    
    test('Input n = 5 Outputs ["1","2","Fizz","4","Buzz"]', () => {
        expect(func(5)).toEqual(["1","2","Fizz","4","Buzz"]);
    });
    
    test('Input n =  15 Outputs ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]', () => {
        expect(func(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    });
});
