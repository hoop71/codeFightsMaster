function climbingStairs(n) {
  let arr = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
}
