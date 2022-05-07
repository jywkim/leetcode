const func = require('../javascript/reverseString');

describe("Reverse String", () => {
    test('Input s = ["h","e","l","l","o"] Outputs ["o","l","l","e","h"]', () => {
        expect(func(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
    });

    test('Input s = ["H","a","n","n","a","h"] Outputs ["h","a","n","n","a","H"]', () => {
        expect(func(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"]);
    });
});