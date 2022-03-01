/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stark = [];
    this.minItems = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stark.push(x)
        //minItems中的元素如 minItems[5]=7意思是在放入的6个元素中，最小数字是7
        //采用的是一种每一步在前一步的基础上奠定的思想
    this.minItems.push(Math.min(this.minItems[this.minItems.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stark.pop()
    this.minItems.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stark[this.stark.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minItems[this.minItems.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */