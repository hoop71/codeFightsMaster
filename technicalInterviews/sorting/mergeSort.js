function mergeSort(sequence) {
  let merge = function(sequence, left, middle, right) {
    let result = [];
    let i;
    let j;

    for (i = left, j = middle; i < middle && j < right; ) {
      if (sequence[i] < sequence[j]) {
        result.push(sequence[i]);
        i++;
      } else {
        result.push(sequence[j]);
        j++;
      }
    }

    while (i < middle) {
      result.push(sequence[i]);
      i++;
    }

    while (j < right) {
      result.push(sequence[j]);
      j++;
    }

    for (i = left; i < right; i++) {
      sequence[i] = result[i - left];
    }
  };

  let split = function(sequence, left, right) {
    let middle = Math.floor((left + right) / 2);

    if (left + 1 === right) {
      return;
    }
    split(sequence, left, middle);
    split(sequence, middle, right);
    merge(sequence, left, middle, right);
  };

  split(sequence, 0, sequence.length);

  return sequence;
}
