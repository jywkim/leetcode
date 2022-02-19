var maxSubArray = function(nums) {
    let localSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        localSum = Math.max(nums[i], localSum + nums[i]);
        maxSum = Math.max(localSum, maxSum);
    }

    return maxSum;
};