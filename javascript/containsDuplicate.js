// Brute-force
// Time: O(N^2)
// Space: O(1)
var containsDuplicateBrute = function(nums) {
    for (let i = 0; i < nums.length; ++ i) {
        for (let j = 0; j < i; ++ j) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// Sort
// Time: O(N LogN)
// Space: O(1)
var containsDuplicateSort = function(nums) {
    nums.sort();
    for (let i = 1; i < nums.length; ++ i) {
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }
    return false;
};

// Map object
// Time: O(N)
// Space: O(N)
var containsDuplicate = function(nums) {
    let map = {};
    let i = 0;
    let len = nums.length;
    for (i; i < len; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};

module.exports = containsDuplicate;