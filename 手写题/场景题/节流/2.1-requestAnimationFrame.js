// 闭包模拟私有方法
var optimizedResize = (function () {
  var callbacks = [],
    running = false;

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;

      // 兼容性处理
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });

    running = false;
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function (callback) {
      if (!callbacks.length) {
        window.addEventListener("resize", resize);
      }
      addCallback(callback);
    },
  };
})();

// start process
optimizedResize.add(function () {
  console.log("Resource conscious resize callback!");
});
