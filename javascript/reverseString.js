var reverseString = function(s) {
    let l = 0;
    let r = s.length - 1;
    let temp = "";
    while (l < r) {
        temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
};