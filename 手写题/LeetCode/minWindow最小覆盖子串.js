var minWindow = function (s, t) {
  let window = new Map(),
    need = new Map(),
    left = (right = valid = start = 0),
    len = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < t.length; i++) {
    if (need.has(t[i])) need.set(t[i], need.get(t[i]) + 1);
    else need.set(t[i], 1);
  }
  while (right < s.length) {
    if (need.has(s[right])) {
      if (window.has(s[right])) window.set(s[right], window.get(s[right]) + 1);
      else window.set(s[right], 1);
      if (window.get(s[right]) === need.get(s[right])) valid++;
    }
    right++;
    while (valid === need.size) {
      console.log(valid);
      if (right - left < len) {
        start = left;
        len = right - left;
        console.log(len);
      }
      if (need.has(s[left])) {
        if (window.get(s[left]) === need.get(s[left])) valid--;
        window.set(s[left], window.get(s[left]) - 1);
      }
      left++;
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? "" : s.substring(start, start + len);
};

minWindow("ADOBECODEBANC", "ABC");
