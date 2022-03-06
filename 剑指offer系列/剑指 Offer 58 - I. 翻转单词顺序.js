/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let news = s.trim().split(' ').reverse().join(' ').replace(/\s+/g, ' ');
    return news;
};