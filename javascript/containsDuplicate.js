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