function composeRanges(nums) {
  let start = 0;
  let stop = 0;
  let arr = [];
  let ans = [];

  // populate arr[0]
  for (let i = 0; i < nums.length; i++) {
    if (arr[0] == undefined) {
      arr.push(nums[i].toString());
      console.log(arr);
    }
    if (nums[i] + 1 != nums[i + 1]) {
      arr.push(nums[i]);
      arr.push(nums[i + 1]);
    }
  }

  console.log(arr);
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] != undefined && arr[i] != arr[i + 1]) {
      ans.push(arr[i].toString() + '->' + arr[i + 1].toString());
    } else if (arr[i] != undefined) {
      ans.push(arr[i].toString());
    }
  }
  return ans;
}
