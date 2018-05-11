function houseRobber(nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];

  nums.reverse();
  console.log(nums);

  let take = 0;
  let oldBest = 0;
  let newBest = 0;

  for (let i = 0; i < nums.length; i++) {
    take = nums[i] + oldBest;
    oldBest = newBest;
    newBest = Math.max(take, oldBest);
  }
  return newBest;
}
