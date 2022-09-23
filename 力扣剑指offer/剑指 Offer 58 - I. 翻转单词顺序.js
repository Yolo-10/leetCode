/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //trim去除首位的空格
    //split分割单词
    //reverse翻转数组
    //join连接字符串
    //replace将多个空格变成一个空格
    let news = s.trim().split(' ').reverse().join(' ').replace(/\s+/g, ' ');
    return news;
};