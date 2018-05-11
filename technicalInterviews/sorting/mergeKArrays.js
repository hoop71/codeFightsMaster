function mergeKArrays(arrays) {
  let firstUnused = [],
    result = [],
    n = 0;
  for (let i = 0; i < arrays.length; i++) {
    firstUnused.push(0);
    n += arrays[i].length;
  }
  for (let i = 0; i < n; i++) {
    let minIndex = -1,
      minValue = 0;
    for (let j = 0; j < arrays.length; j++) {
      if (firstUnused[j] < arrays[j].length) {
        if (minIndex === -1 || minValue > arrays[j][firstUnused[j]]) {
          minIndex = j;
          minValue = arrays[j][firstUnused[j]];
        }
      }
    }
    result.push(minValue);
    firstUnused[minIndex]++;
  }
  return result;
}
