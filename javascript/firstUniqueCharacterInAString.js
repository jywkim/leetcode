var firstUniqChar = function(s) {
    let map = {};
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (let i = 0; i < len; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};