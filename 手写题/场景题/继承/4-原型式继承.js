/* 
原型式继承：
  就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
  
  适用场景：原型式继承非常适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合
  
  缺点：
    1.包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

  1、ECMAScript 5 通过增加 Object.create()方法将原型式继承的概念规范化了。这个方法接收两个
  参数：作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选）。在只有一个参数时，
  Object.create()与这里的 createObj()方法效果相同

  2、Object.create()的第二个参数与 Object.defineProperties()的第二个参数一样：每个新增
  属性都通过各自的描述符来描述。
*/

function createObj(O) {
  function F() {}
  F.prototype = O;
  return new F();
}

let O = {
  id: "001",
  names: ["kevin", "daisy"],
};

let child1 = createObj(O);
child1.id = "002";
console.log(child1.id); // "002"
child1.names.push("yayu");
console.log(child1.names); // [ 'kevin', 'daisy', 'yayu' ]

let child2 = createObj(O);
console.log(child2.id); // "001"
console.log(child2.names); // [ 'kevin', 'daisy', 'yayu' ]

let child3 = createObj(O);
console.log(child3.id); // "001"
child3.names = ["yubo", "yueying"];
console.log(child3.names); // [ 'yubo', 'yueying' ]

let child4 = createObj(O);
console.log(child4.id); // "001"
console.log(child4.names); // [ 'kevin', 'daisy', 'yayu' ]
