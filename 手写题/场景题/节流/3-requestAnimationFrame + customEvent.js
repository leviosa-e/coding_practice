(function () {
  var throttle = function (type, name, obj) {
    // 要绑定事件的目标对象（window 或 DOM 节点）
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        // 自定义事件
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function () {
  console.log("Resource conscious resize callback!");
});
