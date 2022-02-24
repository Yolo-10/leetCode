/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let lef = s.substring(0, n)
    let rgt = s.substring(n, s.length)
    return rgt + lef
};