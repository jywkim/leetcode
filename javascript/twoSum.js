var twoSum = function(nums, target) {
    let map = {};
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i]
        } else {
            map[nums[i]] = i;
        }
    }
};