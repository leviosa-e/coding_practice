var canPartitionKSubsets = function (nums, k) {
  if (k > nums.length) return false;
  let sum = nums.reduce((prev, curr) => prev + curr);
  if (sum % k !== 0) return false;
  let target = sum / k;
  nums.sort((a, b) => b - a);
  let used = new Array(nums.length).fill(false);
  return backtrack(nums, k, used);
  function backtrack(nums, k, used) {
    if (k === 0) return true;
    let track = 0;
    for (let i = 0; i < nums.length; i++) {
      if (!used[i] && track + nums[i] <= target) {
        track += nums[i];
        used[i] = true;
        if (track === target) {
          if (backtrack(nums, k - 1, used)) return true;
          used[i] = false;
          track -= nums[i];
        }
      }
    }
    return false;
  }
};

canPartitionKSubsets(
  [
    3522, 181, 521, 515, 304, 123, 2512, 312, 922, 407, 146, 1932, 4037, 2646,
    3871, 269,
  ],
  5
);
