var singleNumber = function(nums) {
    let i = 0;
    let len = nums.length;
    let res = 0;
    for (i; i < len; i++) {
        res ^= nums[i]
    }
    return res;
};