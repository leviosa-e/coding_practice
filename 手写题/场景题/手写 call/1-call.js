Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;
  let rst = context.fn(...args);
  delete context.fn;
  return rst;
};

var scope = "global";

let context = {
  scope: "local",
};

function test(name, age) {
  console.log(this.scope);
  console.log(name);
  console.log(age);
  console.log("-----------------");
  return "============";
}

test("Tom", 18);
// 浏览器 global;    VS Code 终端 undefined    为什么输出结果会不同？
// 因为后者的全局对象是 node 环境下的全局对象？
test.myCall(context, "Amy", 16);
test.myCall(context, "Cassie");
test.myCall(context, "Daisy", 17, 29);
