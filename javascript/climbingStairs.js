var climbStairs = function(n) {
    if (n <= 1) return 1;
    //return climbStairs(n - 1) + climbStairs(n - 2);
    
    let steps = [1, 1];
	for (let i = 2; i <= n; i++) {
		steps.push(steps[i - 1] + steps[i - 2]);
	}
	return steps[n];
};

module.exports = climbStairs;