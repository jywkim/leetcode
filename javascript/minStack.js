var MinStack = function() {
    this.min = [];
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
        this.min.push(val);
    }
    this.stack.push(val);
};

MinStack.prototype.pop = function() {
    let val = this.stack.pop();
    if (val === this.min[this.min.length - 1]) {
        this.min.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : 0;
};

MinStack.prototype.getMin = function() {
    return this.min.length ? this.min[this.min.length - 1] : 0;
};

function executeStack(minStack, method, param, output, i) {
    switch(method) {
        case "MinStack":
            expect(i).toBe(0);
            break;
        case "push":
            minStack.push(param);
            break;
        case "pop":
            minStack.pop();
            break;
        case "top":
            expect(minStack.top()).toBe(output);
            break;
        case "getMin":
            expect(minStack.getMin()).toBe(output);
            break;
        default:

        }
 }

 module.exports = {MinStack, executeStack};
