var isValid = function(s) {
    /*
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if ((s[i] === "(" && s[i + 1] !== ")") ||
            (s[i] === "{" && s[i + 1] !== "}") ||
            (s[i] === "[" && s[i + 1] !== "]")) {
                return false;
        }
    }
    return true;
    */
    let array = [];
    let len = s.length;
    let map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    };
    for (let i = 0; i < len; i++) {
        if (array.length > 0 && s[i] === map[array[array.length - 1]]) {
            array.pop();
        } else {
            array.push[s[i]];
        }
    }
    return array.length === 0;
};