function insertionSort(arr) {
  const moves = [];
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j > -1 && current < arr[j]) {
      moves.push({
        indicies: [j + 1, j],
        type: 'comp',
      });
      moves.push({
        indicies: [j + 1, j],
        type: 'swap',
      });
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return { sortedArray: arr, moves };
}

export default insertionSort;
