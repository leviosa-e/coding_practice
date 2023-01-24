var canPartitionKSubsets = function (nums, k) {
  let bucket = new Array(k).fill(0);
  return backtrack(nums, 0);
  function backtrack(nums, idx) {
    if (idx === nums.length) {
      console.log(bucket);
      for (let i = 1; i < bucket.length; i++) {
        if (bucket[i] !== bucket[i - 1]) return false;
      }
      return true;
    }
    let rst;
    // 注意这里不能用 let v of bucket
    // v += nums[idx]            X:这样数组里的原值没被修改
    // bucket[i] += nums[idx];   Y:这样数组里的原值才被修改
    for (let i = 0; i < k; i++) {
      bucket[i] += nums[idx];
      rst = backtrack(nums, idx + 1);
      console.log(bucket);
      if (rst) return true;
      bucket[i] -= nums[idx];
    }
    return false;
  }
};

canPartitionKSubsets([1, 2, 3, 4], 3);
