var reverseWords = function(s) {
    return s.split(" ").map((word) => {
        s = word.split("");
        let l = 0, r = word.length - 1;
        while (l < r) {
            let temp = s[l];
            s[l] = s[r];
            s[r] = temp;
            l++;
            r--;
        }
        return s.join("");
    }).join(" ");
};

module.exports = reverseWords;