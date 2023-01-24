class Difference {
  constructor(nums) {
    this.nums = nums;
    this.diff = new Array(nums.length + 1).fill(0);
    this.diff[0] = nums[0];
    for (let i = 1; i <= nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }
  increment(left, right, k) {
    this.diff[left] += k;
    if (right + 1 < this.diff.length) this.diff[right + 1] -= k;
  }
  getResult() {
    let rst = [this.diff[0]];
    for (let i = 1; i < this.nums.length; i++) {
      rst.push(rst[i - 1] + this.diff[i]);
    }
    return rst;
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let diffObj = new Difference(arr);
diffObj.increment(1, 3, 1);
console.log(diffObj.getResult());
