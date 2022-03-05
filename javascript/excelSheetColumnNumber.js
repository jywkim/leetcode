var titleToNumber = function(columnTitle) {
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let currentLetter = columnTitle[i];
        let currentNumber = currentLetter.charCodeAt(0) - 64;
        res += currentNumber * Math.pow(26, columnTitle.length - i - 1);
    }
    return res;
};