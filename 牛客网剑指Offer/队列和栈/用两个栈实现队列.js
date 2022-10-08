let stack1 = [];
let stack2 = [];

function push(node) {
  // write code here
  stack1.push(node);
}
function pop() {
  // write code here
  // 栈2中没有元素，再讲栈1元素按顺序添加进去
  if(stack2.length == 0){
    while(stack1.length !=0)
        stack2.push(stack1.pop());
  }
  //若栈2还有元素，直接pop出
  //不能栈2还有元素还加进，会破坏顺序
  return stack2.pop();
}
module.exports = {
  push: push,
  pop: pop,
};
