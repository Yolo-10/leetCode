/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function(solution, guess) {
    let m = 0,
        n = 0;
    let arr = guess.split('')
    for (let i = 0; i < 4; i++) {
        //猜中
        if (solution[i] === guess[i]) m++;
        //寻找guess中是否存在solution的颜色
        let j = arr.indexOf(solution[i])
        if (j !== -1) {
            n++
            //arr数组，删除从下标为j的元素开始的1个元素
            //匹配到1个删除了1个
            //找出颜色总共匹配了几对
            arr.splice(j, 1)
        }
    }
    //颜色位置完全一样+颜色一样位置不一样==颜色匹配的对数
    return [m, n - m]
};