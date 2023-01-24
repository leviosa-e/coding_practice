/* function mergeSort(arr, left, right) {
  const mid = Math.floor(left + (right - left) / 2);
  return merge(mergeSort(arr, left, mid), mergeSort(arr, mid + 1, right));
}

function merge(arr1, arr2) {
  let mergedArr = []

} */

function mergeSort(arr) {
  console.log("arr:", arr);
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let rst = merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
  console.log("rst:", rst);
  return rst;
}

function merge(arr1, arr2) {
  console.log("merge:", arr1, arr2);
  let mergedArr = [],
    p1 = 0,
    p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) mergedArr.push(arr1[p1++]);
    else mergedArr.push(arr2[p2++]);
  }
  console.log("p1:", p1);
  console.log("p2:", p2);
  if (p1 < arr1.length) mergedArr.push(...arr1.slice(p1));
  if (p2 < arr2.length) mergedArr.push(...arr2.slice(p2));
  console.log("mergedArr:", mergedArr);
  return mergedArr;
}

console.log(mergeSort([5, 2, 3, 1]));
