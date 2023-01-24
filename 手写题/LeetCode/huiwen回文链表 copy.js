function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  let dummy = new ListNode(0);
  let rHead = reverse(head);
  dummy = dummy.next;
  while (dummy) {
    if (dummy.val !== rHead.val) return false;
    console.log("hv---" + dummy.val + "rv---" + rHead.val);
    dummy = dummy.next;
    rHead = rHead.next;
  }
  return true;

  function reverse(head) {
    if (!head) return head;
    let pre = null,
      cur = head,
      p = dummy;
    while (cur) {
      p.next = new ListNode(cur.val);
      p = p.next;
      let nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
    }
    return pre;
  }
};

let arr = [1, 1, 2, 1],
  dummy = new ListNode(0),
  p = dummy;
for (let i of arr) {
  p.next = new ListNode(i);
  p = p.next;
}

console.log(isPalindrome(dummy.next));
