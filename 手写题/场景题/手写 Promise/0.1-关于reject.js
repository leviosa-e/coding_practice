Promise.myAll = function (iterable) {
  return new Promise((resolve, reject) => {
    // 传入的不一定是数组，所以需要先将传入的 iterable 对象转为数组
    let arr = Array.from(iterable),
      rst = [],
      len = arr.length,
      cnt = 0;
    if (len === 0) return resolve([]);
    for (let i = 0; i < len; i++) {
      // 包装数组元素，将 非 Promise 对象 转为 Promise 对象
      Promise.resolve(arr[i])
        .then((value) => {
          rst[i] = value;
          cnt++;
          console.log(cnt);
          if (cnt === len) resolve(rst);
        })
        .catch((err) => reject(err));
    }
  });
};

// test
const p1 = Promise.resolve("p1");

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 延时一秒");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 延时两秒");
  }, 2000);
});

const p4 = Promise.reject("p4 rejected");

// const p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p5 rejected 延时1.5秒");
//   }, 1500);
// });

/* // 所有Promise实例都成功
Promise.myAll([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err)); // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]

// 一个Promise实例失败
Promise.myAll([p1, p2, p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err)); // p4 rejected

// 一个延时失败的Promise
Promise.myAll([p1, p2, p5])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err)); // 1.5秒后打印 p5 rejected */

// 两个Promise实例失败
Promise.myAll([p1, p4, p1])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err)); // p4 rejected

/* 
  1
  2
  p4 rejected（这里应该是 p4 给挂到了宏任务队列，所以先执行了下一轮循环的代码，最后再输出 p4 rejected）
*/
