class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(func) {
    this.state = MyPromise.PENDING;
    this.result = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.state === MyPromise.PENDING) {
      setTimeout(() => {
        this.state = MyPromise.FULFILLED;
        this.result = value;
        this.onFulfilledCallbacks.forEach((callback) => {
          callback(value);
        });
      });
    }
  }

  reject(reason) {
    if (this.state === MyPromise.PENDING) {
      setTimeout(() => {
        this.state = MyPromise.REJECTED;
        this.result = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback(reason);
        });
      });
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.result);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (this.state === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.result);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (this.state === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.result);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.result);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });

    return promise2;
  }

  catch(errFunc) {
    return this.then(null, errFunc);
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }

  if (x instanceof MyPromise) {
    if (x.state === MyPromise.PENDING) {
      x.then((y) => resolvePromise(promise2, y, resolve, reject), reject);
    } else if (x.state === MyPromise.FULFILLED) {
      resolve(x.result);
    } else if (x.state === MyPromise.REJECTED) {
      reject(x.result);
    }
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      var then = x.then;
    } catch (e) {
      return reject(e);
    }

    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (e) {
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      resolve(x);
    }
  } else {
    return resolve(x);
  }
}

// 测试代码
console.log(1);
let promise1 = new MyPromise((resolve, reject) => {
  console.log(2);
  resolve("这次一定");
});
promise1
  .then(
    (result) => {
      console.log("fulfilled:", result);
      return "then";
    },
    (reason) => {
      console.log("rejected:", reason);
    }
  )
  .then((result) => {
    console.log("then:", result);
  });
console.log(3);
