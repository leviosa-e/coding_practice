const clone = require("../src/deepCopy_3.js");

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};

target.target = target;

const result = clone(target);

console.log(result);
