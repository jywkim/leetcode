var mySqrt = function(x) {
    if (x <= 0) {
        return 0;
    }

    let low = 1;
    let high = x;
    while (low <= high) {
        let mid = parseInt(low + (high - low) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high * high < x ? high : low; 
};