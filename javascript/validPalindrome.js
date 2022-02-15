var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]+/gi, '');
    return s === s.split('').reverse().join('');
};