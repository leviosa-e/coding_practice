/* 
借用构造函数继承：
  优点：
    1.避免了引用类型的属性被所有实例共享

    2.可以在 Child 中向 Parent 传参

  缺点：
    1.方法都在构造函数中定义，每次创建实例都会创建一遍方法
*/

function Parent(id) {
  this.id = id;
  this.names = ["kevin", "daisy"];
}

function Child(id) {
  Parent.call(this, id);
}

let child1 = new Child("001");
child1.names.push("yayu");
console.log(child1.id); // "001"
console.log(child1.names); // ["kevin", "daisy", "yayu"]

let child2 = new Child("002");
console.log(child2.id); // "002"
console.log(child2.names); // ["kevin", "daisy"]
