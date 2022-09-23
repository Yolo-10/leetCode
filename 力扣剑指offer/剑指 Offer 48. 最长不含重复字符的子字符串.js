/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // if(!s) return 0;
    // let dp=[1];
    // let tmp=s[0]+"";
    // for(let i=1;i<s.length;i++){
    //     let index = tmp.indexOf(s[i]);
    //     if(index!== -1 ){
    //         tmp=tmp.substring(index+1,tmp.length);
    //     }
    //     tmp=tmp+s[i];
    //     dp[i]=Math.max(dp[i-1],tmp.length);
    // }
    // return dp[s.length-1];

    let max = 0,
        tmp = '';
    for (let i = 0; i < s.length; i++) {
        //查看当前的不重复字符串中是否存在跟s[i]重复的字符
        let index = tmp.indexOf(s[i]);
        if (index !== -1) {
            //如果重复，裁剪出重复字符后面的字符串
            tmp = tmp.substring(index + 1, tmp.length);
        }
        //拼接上字符串，成为当前的不重复字符串
        tmp = tmp + s[i];
        max = Math.max(max, tmp.length);
    }
    return max;
};