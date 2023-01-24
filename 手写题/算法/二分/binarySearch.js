function binarySearchRight(nums, target) {
  let left = 0,
    right = nums.length - 1;
  // ans = nums.length;
  // ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
      // ans = right;
    } else {
      left = mid + 1;
    }
  }
  if (right < 0 || nums[right] != target) return -1;
  return right;
}

function binarySearchLeft(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left >= nums.length || nums[left] != target) return -1;
  return left;
}

// const arr1 = [0, 1, 2, 2, 2, 3, 4, 5, 6];
// console.log(binarySearchLeft(arr1, 2));
// console.log(binarySearchRight(arr1, 2));
// 找不到的情况
// console.log(binarySearchLeft(arr1, -1));
// console.log(binarySearchRight(arr1, -1));
// console.log(binarySearchLeft(arr1, 7));
// console.log(binarySearchRight(arr1, 7));

// const arr2 = [1, 3, 4, 5, 6];
// console.log(binarySearchRight(arr2, 2));

var search = function (nums, target) {
  function binarySearchRight(nums, target) {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }
  return binarySearchRight(nums, target) - binarySearchRight(nums, target - 1);
};

console.log(search([1, 2, 3, 5, 5, 7, 7], 5));
console.log(binarySearchRight([1, 2, 3, 5, 5, 7, 7], 4));
