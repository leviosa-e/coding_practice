/* 
原型链继承：
  优点：
    1.方法定义在原型对象上，不需要每次创建实例创建一遍方法
    
  缺点：
    1.引用类型的属性被所有实例共享

    2.无法在 Child 中向 Parent 传参
*/

function Parent(id) {
  this.id = id;
  this.names = ["kevin", "daisy"];
}

function Child() {}

Child.prototype = new Parent("001");

let child1 = new Child();
child1.names.push("yayu");
console.log(child1.id); // "001"
console.log(child1.names); // ["kevin", "daisy", "yayu"]

let child2 = new Child();
console.log(child2.id); // "001"
console.log(child2.names); // ["kevin", "daisy", "yayu"]
