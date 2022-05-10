var strStr = function(haystack, needle) {
    if (!needle) return 0;
    if (!haystack || needle.length > haystack.length) return -1;

    for (let i = 0; i < haystack.length; i++) {
       let string = haystack.substr(i, needle.length);
       if (string === needle) {
           return i;
       }
    }

    return -1;
};

module.exports = strStr;