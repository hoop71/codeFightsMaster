function removeKFromList(l, k) {
  let current = l;
  let prev = null;
  while (current != null) {
    if (current.value === k) {
      if (prev == null) {
        l = current.next;
        current = l;
      } else {
        prev.next = current.next;
        current = current.next;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }
  return l;
}
