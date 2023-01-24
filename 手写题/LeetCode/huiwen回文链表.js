function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function isPalindrome(head) {
  function reverseList(head) {
    let prev = null,
      curr = head,
      currClone = head,
      dummy = new ListNode(0),
      tail = dummy;
    while (currClone) {
      tail.next = new ListNode(currClone.val);
      tail = tail.next;
      currClone = currClone.next;
    }
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    tail.next = null;
    return [prev, dummy.next];
  }
  let rst = reverseList(head),
    rHead = rst[0],
    initHead = rst[1];
  while (rHead && initHead) {
    console.log(initHead.val + "---r-" + rHead.val);
    if (initHead.val !== rHead.val) return false;
    rHead = rHead.next;
    initHead = initHead.next;
    console.log(initHead + "---r-" + rHead);
  }
  return true;
}

let tHead = new ListNode(1);
tHead.next = new ListNode(1);
tHead.next.next = new ListNode(2);
tHead.next.next.next = new ListNode(1);

console.log(isPalindrome(tHead));
