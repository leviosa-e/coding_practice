/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  console.log(nums1.length);
  console.log(nums2.length);
  function pickMax(nums, k) {
    let stack = [],
      cnt = nums.length - k;
    for (let i of nums) {
      while (stack.length > 0 && i > stack[stack.length - 1] && cnt > 0) {
        stack.pop();
        cnt--;
      }
      stack.push(i);
    }
    return stack.slice(0, k);
  }
  function merge(A, B) {
    let rst = [];
    while (A.length > 0 || B.length > 0) {
      let bigger = A > B ? A : B;
      rst.push(bigger.shift());
    }
    return rst.join("");
  }
  let rst = "0";
  for (let i = 1; i <= nums1.length; i++) {
    if (k - i > nums2.length) continue;
    if (i > k) break;
    let tmp = merge(pickMax(nums1, i), pickMax(nums2, k - i));
    rst = tmp > rst ? tmp : rst;
  }
  return rst.split("").length;
};
console.log(
  maxNumber(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    100
  )
);
