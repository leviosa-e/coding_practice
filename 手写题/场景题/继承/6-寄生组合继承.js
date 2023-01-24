/* 
寄生组合继承：
  寄生式组合继承可以算是引用类型继承的最佳模式。
  
  优点：
    这种方式的高效率体现它只调用了一次 Parent 构造函数，
    并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
    与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。

  痛点：
    3-组合继承最大的缺点是会调用两次父构造函数：

      一次是设置子类型实例的原型的时候：
        Child.prototype = new Parent();

      一次在创建子类型实例的时候：
        var child1 = new Child('kevin', '18'); 
        回想下 new 的模拟实现，其实在这句中，我们会执行：===> Parent.call(this, name);
        所以 Child.prototype 和 child1 都会有一个属性为colors，属性值为['red', 'blue', 'green']。
  
  解决：
    如何避免这一次重复调用？
      不使用 Child.prototype = new Parent() ，而是间接的让 Child.prototype 访问到 Parent.prototype
*/

function Parent(name) {
  this.name = name;
  this.arr = [1, 2, 3];
}

Parent.prototype.say = () => {
  console.log("hi");
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
