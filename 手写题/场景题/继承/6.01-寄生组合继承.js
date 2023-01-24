function Parent(family) {
  this.family = family;
  this.friends = ["kevin", "daisy"];
}

Parent.prototype.getFamily = function () {
  console.log(this.family);
};

function Child(family) {
  Parent.call(this, family);
}

// OK 的，但是改变了原型链，Child.prototype 被搞没了
// Child.prototype = Parent.prototype;

// 这样就对了，但还差一点 constructor 没处理
// function F() {}

// F.prototype = Parent.prototype;

// Child.prototype = new F();

// 完整封装
// 寄生
function object(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

// 调整原型链
function prototype(child, parent) {
  let prototype4Child = object(parent.prototype);
  prototype4Child.constructor = child;
  child.prototype = prototype4Child;
}

prototype(Child, Parent);

let child1 = new Child("Lebron");
child1.getFamily(); // "Lebron"

let child2 = new Child("Stephen");
child2.getFamily(); // "Stephen"

console.log(child1 instanceof Child);
console.log(child1 instanceof Parent);
