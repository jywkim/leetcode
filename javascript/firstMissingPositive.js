var firstMissingPositive = function(nums) {
    let len = nums.length;
    let i = 0;
    while (i < len) {
        if (nums[i] > 0 &&
            nums[i] !== i + 1 &&
            nums[i] !== nums[nums[i] - 1]) {
            swap(nums, i, nums[i] - 1)
        } else {
            i++;
        }
    }
    for (let j = 0; j < len; j++) {
        if (nums[j] !== j + 1) return j + 1;
    }
    return len + 1;
};

function swap(nums, i , j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

module.exports = firstMissingPositive;