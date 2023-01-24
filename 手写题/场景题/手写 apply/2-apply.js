Function.prototype.myApply = function (context, argsArr) {
  context.fn = this;
  context.fn(...argsArr);
  delete context.fn;
};

function test(name, age) {
  console.log(this.scope);
  console.log(name);
  console.log(age);
  console.log("-------------");
}

let context = {
  scope: "local",
};

test("Tom", 18);
test.myApply(context, ["Amy", 16]);

/* 
undefined
Tom
18
-------------
local
[ 'Amy', 16 ]
undefined
-------------
*/
