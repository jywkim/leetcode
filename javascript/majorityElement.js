var majorityElement = function(nums) {
    let map = {};
    let majorityNum = 0;
    let max = 0;
    let i = 0;
    let len = nums.length;
    for (i; i < len; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
        }
        map[nums[i]]++;
        if (map[nums[i]] > max) {
            majorityNum = nums[i];
            max = map[nums[i]];
        }
    }
    return majorityNum;
};