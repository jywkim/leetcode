var reverseWords = function(s) {
    s = s.split(" ").filter(s => s !== "");
    let l = 0, r = s.length - 1;
    while (l < r) {
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
    return s.join(" ");
};