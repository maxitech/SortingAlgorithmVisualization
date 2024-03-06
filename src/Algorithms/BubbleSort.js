function bubbleSort(arr) {
  const moves = [];

  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        moves.push([i + 1, i]);
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return { sortedArray: arr, moves };
}

export default bubbleSort;
