var __readline = require('readline-sync')
__readline.setDefaultOptions({
  prompt: ''
})
var read_line = __readline.prompt


let m, n, res,
  str, flag;

while (str = read_line()) {
  let arr = str.split(' ');
  m = parseInt(arr[0]);
  n = parseInt(arr[1]);
  res = '', flag = 0;

  for (let i = m; i <= n; i++) {
    let bai = parseInt(i / 100),
      shi = parseInt((i - 100 * bai) / 10),
      ge = parseInt(i - (bai * 100 + shi * 10));

    if (Math.pow(bai, 3) + Math.pow(shi, 3) + Math.pow(ge, 3) == i) {
      flag = 1;
      res += i + " ";
    }
  }

  console.log(flag ? res : "no");
}