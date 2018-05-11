function isListPalindrome(l) {
  if (l === null) return true;
  let arr = [];
  let current = l;
  let next = current.next;
  while (next != null) {
    arr.push(current.value);
    current = current.next;
    next = current.next;
  }
  if (next == null) {
    arr.push(current.value);
  }
  console.log(arr);
  console.log(arr.reverse());
  function isPalindrome(s, i) {
    return (
      (i = i || 0) < 0 ||
      i >= s.length >> 1 ||
      (s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i))
    );
  }
  return isPalindrome(arr);
}
