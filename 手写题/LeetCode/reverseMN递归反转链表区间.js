function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let tail = (end = null);
function reverseMN(head, m, n) {
  if (!head || !head.next) return head;
  if (n === 1) {
    end = head;
    tail = head.next;
    return head;
  }
  reverseMN(head.next, m - 1, n - 1);
  if (m <= 1 && n >= 2) {
    head.next.next = head;
    head.next = tail;
  }
  if (m === 2) head.next = end;
  return head;
}

/* 
let lastNext = null
function reverseMN(head, m, n) {
  if (!head || !head.next) return head
  if (m === 1) return reverseN(head, n)
  head.next = reverseMN(head.next, m-1, n-1)
  return head
}
*/

let arr = [1, 2, 3, 4, 5, 6],
  dummy = new ListNode(0),
  p = dummy;
for (let i of arr) {
  p.next = new ListNode(i);
  p = p.next;
}

let reverseHead = reverseMN(dummy.next, 3, 5);
while (reverseHead) {
  console.log(reverseHead.val);
  reverseHead = reverseHead.next;
}
