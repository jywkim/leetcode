var mySqrt = function(x) {
    let start = 0, end = x, mid = 0;
    
    while (start + 1 < end) {
        mid = start + (end - start) / 2;
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            start = mid;
        } else {
            end = mid;
        }
    }

    return end * end === x ? end : start;
};