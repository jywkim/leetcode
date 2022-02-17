var isHappy = function(n) {
    let map = {};
    while (n !== 1 && !map[n]) {
        map[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(n) {
    let arrayDigits = n.toString().split("");
    return arrayDigits.reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}