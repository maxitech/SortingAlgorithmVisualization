function mergeSort(arr, moves = [], startIdx = 0) {
  const mid = Math.floor(arr.length / 2);

  if (arr.length <= 1) return arr;

  const left = arr.splice(0, mid);
  const sortedLeft = mergeSort(left, moves, startIdx);
  const sortedRight = mergeSort(arr, moves, startIdx + mid);
  const merged = merge(sortedLeft, sortedRight, moves, startIdx);

  return merged;
}

function merge(left, right, moves, startIdx) {
  let arr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    moves.push({
      indicies: [startIdx + leftIdx, startIdx + left.length + rightIdx],
      type: 'comp',
    });

    if (left[leftIdx] <= right[rightIdx]) {
      arr.push(left[leftIdx]);
      leftIdx++;
    } else {
      moves.push({
        indicies: [startIdx + leftIdx, startIdx + left.length + rightIdx],
        type: 'swap',
      });
      arr.push(right[rightIdx]);
      rightIdx++;
    }
  }

  while (leftIdx < left.length) {
    arr.push(left[leftIdx]);
    leftIdx++;
  }

  while (rightIdx < right.length) {
    arr.push(right[rightIdx]);
    rightIdx++;
  }

  for (let i = 0; i < arr.length; i++) {
    moves.push({
      indicies: [startIdx + i],
      type: 'merge',
      value: arr[i],
    });
  }

  return arr;
}

export default function (arr) {
  const moves = [];
  const sortedArray = mergeSort(arr, moves);
  return { sortedArray, moves };
}
