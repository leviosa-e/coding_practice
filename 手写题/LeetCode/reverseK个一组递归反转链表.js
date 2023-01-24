function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseKGroup = function (head, k) {
  if (!head || !head.next) return head;
  let p = (pre = head),
    cur = head.next;
  /* let p = head,
    pre = head,
    cur = head.next; */
  // let p = cur = head, pre = null
  for (let i = 1; i <= k; i++) {
    if (!p) return head;
    p = p.next;
  }
  // console.log(pre);
  for (let i = 1; i <= k - 1; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  // console.log(pre);
  head.next = reverseKGroup(cur, k);
  // console.log(head);
  console.log(pre);
  return pre;
};

let arr = [1, 2, 3, 4, 5, 6, 7],
  dummy = new ListNode(0),
  p = dummy;
for (let i of arr) {
  p.next = new ListNode(i);
  p = p.next;
}

let reverseHead = reverseKGroup(dummy.next, 2);
while (reverseHead) {
  console.log(reverseHead.val);
  reverseHead = reverseHead.next;
}
