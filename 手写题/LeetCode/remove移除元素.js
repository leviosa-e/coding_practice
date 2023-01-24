var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[right] === val) right--;
    if (left >= right) break;
    if (nums[left] === val)
      [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
  }
  return nums[left] === val ? left : left + 1;
};

let nums = [3, 2, 2, 3];
let len = removeElement(nums, 3);
console.log(len);
for (let i = 0; i < len; i++) {
  console.log(nums[i]);
}
