function quickSort(arr, moves = [], left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const pivotIndex = partition(arr, moves, left, right);
  quickSort(arr, moves, left, pivotIndex - 1);
  quickSort(arr, moves, pivotIndex + 1, right);

  return arr;
}

function partition(arr, moves, left, right) {
  const pivotValue = arr[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    moves.push({
      indicies: [i, partitionIndex],
      type: 'comp',
    });

    if (arr[i] < pivotValue) {
      moves.push({
        indicies: [i, partitionIndex],
        type: 'swap',
      });
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  moves.push({
    indicies: [right, partitionIndex],
    type: 'pivot',
  });
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

export default function (arr) {
  const moves = [];
  const sortedArray = quickSort([...arr], moves);
  return { sortedArray, moves };
}
