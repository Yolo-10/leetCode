var CQueue = function() {
    this.starkA = [] //进入栈
    this.starkB = [] //出入栈
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    //栈的特性，后进先出
    // 1 2 3 +4  -->  1 2 3 4
    this.starkA.push(value);
};

/**
 * @return {number}
 *  //--------------------------------如果
    //进入栈：空
    //出入栈：4 3 2 1
    //--------------------------------增加一个元素6
    //进入栈：6
    //出入栈：4 3 2 1
    //-------------------------------删除一个
    //进入栈：6
    //出入栈：4 3 2 
    //-------------------------------连续删除3个
    //进入栈：6
    //出入栈：
    //--------------------------------再删除一个
    //进入栈：
    //出入栈：6(将6放进出入栈，删除)
 */
CQueue.prototype.deleteHead = function() {
    //当进入栈与出入栈全空，头部无可以删除的
    if (!this.starkA.length && !this.starkB.length) return -1;
    //当出入栈为空时
    if (!this.starkB.length) {
        //遍历进入栈，将进入栈的元素倒序放进出入栈
        //进入栈中最新的元素放到了出入栈头部，最旧的元素放进来尾部
        //删除出入栈的尾部元素就是删除了最开始放进来的元素
        //进入栈 1 2 3 4 --> 出入栈 4 3 2 1
        while (this.starkA.length) {
            this.starkB.push(this.starkA.pop())
        }
    }
    return this.starkB.pop();
};