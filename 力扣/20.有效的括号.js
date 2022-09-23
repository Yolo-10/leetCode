/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let Map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let items = [];
    for (let i of s) {
        //左括号的进栈
        if (i in Map) items.push(i);
        //右括号就将左括号给出栈
        else {
            let temp = items.pop();
            //如果左右括号不匹配，就是不对的
            if (Map[temp] != i)
                return false
        }
    }
    //要考虑之后栈是否还有元素的情况
    if (items.length != 0)
        return false
    else
        return true
};


// @lc code=end