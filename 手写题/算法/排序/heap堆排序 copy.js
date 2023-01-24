let len;

// 建立小顶堆
function buildMinHeap(arr) {
  len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) heapify(arr, i);
}

// 堆调整
function heapify(arr, i) {
  let min = i,
    left = 2 * i + 1,
    right = 2 * i + 2;
  if (left < len && arr[left] < arr[min]) min = left;
  if (right < len && arr[right] < arr[min]) min = right;
  // min !== i 不能漏了！！！否则会调用栈溢出！！
  if (min !== i) {
    [arr[min], arr[i]] = [arr[i], arr[min]];
    heapify(arr, min);
  }
}

// 堆排序
function heapSort(arr) {
  buildMinHeap(arr);
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // len-- 不能漏了！！！否则会乱序！！
    len--;
    heapify(arr, 0);
  }
  console.log(arr);
}

let arr1 = [
  3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7,
  4, 0, 2, 6,
];
heapSort(arr1);
