var isPowerOfThree = function(n) {
    if (n > 1 && n % 3 === 0) {
        return isPowerOfThree(n/3);
    } else if (n === 1) {
        return true;
    } else {
        return false;
    }
};