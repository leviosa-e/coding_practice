function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let lastNext = null;
function reverseN(head, n) {
  if (!head || !head.next) return head;
  if (n === 1) {
    lastNext = head.next;
    return head;
  }
  let last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = lastNext;
  return last;
}

let arr = [1, 2, 3, 4, 5, 6],
  dummy = new ListNode(0),
  p = dummy;
for (let i of arr) {
  p.next = new ListNode(i);
  p = p.next;
}

let reverseHead = reverseN(dummy.next, 3);
while (reverseHead) {
  console.log(reverseHead.val);
  reverseHead = reverseHead.next;
}
