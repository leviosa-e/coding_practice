/* 
组合继承：
  优点：
    1.融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式
*/

function Parent(id) {
  this.id = id;
  this.names = ["kevin", "daisy"];
}

Parent.prototype.getID = function () {
  console.log(this.id);
};

function Child(id) {
  Parent.call(this, id);
}

Child.prototype = new Parent("001");

let child1 = new Child("002");
child1.names.push("yayu");
child1.getID(); // "002"
console.log(child1.names); // ["kevin", "daisy", "yayu"]

let child2 = new Child("003");
child2.getID(); // "003"
console.log(child2.names); // ["kevin", "daisy"]
