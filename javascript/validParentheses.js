var isValid = function(s) {
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
            array.push(s[i]);
        }
    }
    return array.length === 0;
};

module.exports = isValid;