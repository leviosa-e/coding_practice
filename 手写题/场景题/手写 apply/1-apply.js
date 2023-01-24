Function.prototype.myApply = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

// test
let scope = "global";
let obj = {
  foo: "bar",
};

let context = {
  scope: "local",
  obj: {
    foo: "baz",
  },
  globalObj: {
    foo: "contextBaz",
  },
};

function globalDeclare() {
  obj = {
    foo: "globaz",
  };
  globalObj = {
    foo: "gloFoobaz",
  };
  scope = "function";
  funcScope = "func";
}

function test() {
  console.log(scope); // function                                  function
  console.log(this.scope); // undefined                             local
  console.log(obj); // { foo: 'globaz' }                       { foo: 'globaz' }
  console.log(this.obj); // undefined                            { foo: 'baz' }
  console.log(this.globalObj); // { foo: 'gloFoobaz' } 引用变量会挂载到 window 对象上    { foo: 'contextBaz' }
  console.log(funcScope); // func                                   func
  console.log(this.funcScope); // func 基本变量也会挂载到 window 对象上      undefined
  console.log("-----------------------");
  console.log(tempo); // temp                                        temp  不会出现暂时性死区
}

globalDeclare();

let tempo = "temp";

// 当即将进入 test 函数执行上下文时，进行准备工作，找到声明 test 函数的位置，保存最新的作用域链
test();
test.myApply(context);

/* 
function
undefined
{ foo: 'globaz' }
undefined
{ foo: 'gloFoobaz' }
func
func
-----------------------
function
local
{ foo: 'globaz' }
{ foo: 'baz' }
{ foo: 'contextBaz' }
func
undefined
-----------------------
*/
