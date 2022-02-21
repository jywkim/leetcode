var longestCommonPrefix = function(strs) {
    let prefix = ""
    let wordCount = strs.length;
    if (wordCount === 0) return "";
    if (wordCount === 1) return strs[0];
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < wordCount; j++) {
            if (strs[j][i] === strs[0][i]) {
                continue
            } else {
                return prefix
            }
        }
        prefix += strs[0][i]
    }
    return prefix
};