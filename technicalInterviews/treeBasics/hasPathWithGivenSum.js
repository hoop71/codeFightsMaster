function hasPathWithGivenSum(t, s) {
  if (t == null && s === 0) return true;

  bTP = t => {
    let paths = [];
    let root = t;
    if (!root) return [];
    if (root.left == null && root.right == null) {
      if (paths.length == 0) return [root.value];
      else return root.value;
    } else {
      if (root.left)
        bTP(root.left).forEach(lp => {
          paths.push(root.value + lp);
        });
      if (root.right)
        bTP(root.right).forEach(rp => {
          paths.push(root.value + rp);
        });
    }
    return paths;
  };

  return bTP(t).includes(s);
}
