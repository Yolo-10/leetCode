/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    for (let ch of s) {
        if (s.indexOf(ch) == s.lastIndexOf(ch)) {
            return ch;
        }
    }
    return ' '
};