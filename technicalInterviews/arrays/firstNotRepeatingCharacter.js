function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) == s.indexOf(s[i])) {
      return s[i];
    }
  }
  return '_';
}
