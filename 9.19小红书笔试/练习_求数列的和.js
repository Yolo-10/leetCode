var __readline = require('readline-sync')
__readline.setDefaultOptions({
  prompt: ''
})
var read_line = __readline.prompt



var n, m, sum;
var str;

while (str = read_line()) {
  var arr = str.split(' ');
  n = parseInt(arr[0]);
  m = parseInt(arr[1]);
  sum = 0;
  for (let i = 0; i < m; i++) {
    sum += n;
    n = Math.sqrt(n);
  }
  console.log(sum.toFixed(2));
}