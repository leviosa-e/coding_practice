class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(func) {
    this.state = MyPromise.PENDING;
    this.result = null;
    // 捕获错误
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.state === MyPromise.PENDING) {
      this.state = MyPromise.FULFILLED;
      this.result = value;
    }
  }

  reject(reason) {
    if (this.state === MyPromise.PENDING) {
      this.state = MyPromise.REJECTED;
      this.result = reason;
    }
  }

  then(onFulfilled, onRejected) {
    // 当传入的参数不是函数时，忽略操作，直接返回原值
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function" ? onRejected : (reason) => reason;
    // 返回一个新 Promise 对象
    return new MyPromise((resolve, reject) => {
      let rst = null;
      if (this.state === MyPromise.FULFILLED) {
        rst = onFulfilled(this.result);
      } else if (this.state === MyPromise.REJECTED) {
        rst = onRejected(this.result);
      }
      resolve(rst);
    });
  }
  // catch 内部其实是调用的 then
  catch(errFunc) {
    return this.then(null, errFunc);
  }
}

// test
const p1 = new MyPromise((resolve, reject) => {
  throw new Error("fail");
});
const p1then = p1.then(null, (reason) => {
  console.log("rejected:", reason);
});
console.log(p1then);
