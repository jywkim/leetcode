var fizzBuzz = function(n) {
    let i = 1;
    let array = [];
    for (i; i <= n; i++) {
        let newString = "";
        if (i % 3 === 0) {
            newString += "Fizz";
        }
        if (i % 5 === 0) {
            newString += "Buzz";
        }
        array.push(newString.length ? newString : i.toString());
    }
    return array;
};

module.exports = fizzBuzz;