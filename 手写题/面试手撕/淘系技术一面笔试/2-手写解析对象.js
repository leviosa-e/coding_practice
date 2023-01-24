/* 
  实现 parseObj():
    {'a.b': 'b', 'a.c' : 'c', 'a.d.e': 'e'} => {a: {b: 'b', c: 'c', d: {e: 'e'}}}

  思路：
    1、用 Map 记录是否已经存在该属性，最外层的对象命名为 grand，初始化为空对象 {}
    
    2、对于 'a.d.e'，从后往前遍历，如果前一个属性(key)存在，那就直接从 Map 中取出引用地址，
       在前一个属性的原对象上直接添加当前的值(value)。添加完后，更新当前的值为前一个属性对象。
       再进入下一轮循环

    3、小技巧。在 'a.d.e' 前加上最外层对象，即改成 'grand.a.d.e'，可以避免繁琐的边界条件处理。

  缺陷：
    1、单纯用 Map 记录，且从后往前遍历，如果测试用例为 {'a.b': 'b', 'a.d.b.c': 'c'} 就会出错
       但是毕竟题意不清，这个漏洞暂且搁置
*/

function parseObj(obj) {
  let dic = new Map(),
    grand = {};
  dic.set("grand", grand);

  for (let k in obj) {
    let arr = k.split("."),
      value = obj[k];
    arr.unshift("grand");
    for (let i = arr.length - 1; i >= 1; i--) {
      let key = arr[i],
        parentKey = arr[i - 1];
      let parent = dic.has(parentKey) ? dic.get(parentKey) : {};
      parent[key] = value; // 注意这里必须用中括号，因为属性值是变量名，不能用 .
      value = parent; // 更新 value
      dic.set(parentKey, parent); // 更新 map，其实如果属性已存在，是不需要更新的，因为已经取出引用地址更改了原对象
    }
  }

  return grand;
}

console.log(parseObj({ "a.b": "b", "a.c": "c", "a.d.e": "e" }));
