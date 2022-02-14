var moveZeroes = function(nums) {
    let len = nums.length;
    let nonZeroIndex = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < len; i++) {
        nums[i] = 0;
    }
};