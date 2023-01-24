/* 
寄生式继承：
  在原型式继承的基础上，增强创建出来的对象

  适用场景：寄生式继承同样适合主要关注对象，而不在乎类型和构造函数的场景。
           createObject()函数不是寄生式继承所必需的，任何返回新对象的函数都可以在这里使用

  缺点：
    1.跟借用构造函数模式一样，每次创建对象都会创建一遍方法，导致函数难以重用

    2.包含引用类型的属性值始终都会共享相应的值，这点也没被解决吧？
*/

function createObj(O) {
  let obj = Object.create(O);
  obj.sayHi = function () {
    console.log("hi");
  };
  return obj;
}
