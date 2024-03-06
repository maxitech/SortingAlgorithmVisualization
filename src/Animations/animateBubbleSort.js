function animateBubbleSort(array, moves, setSortedArray) {
  if (!moves || moves.length === 0) return;

  const [i, j] = moves.shift();
  [array[i], array[j]] = [array[j], array[i]];

  setSortedArray([...array]);

  setTimeout(() => {
    animateBubbleSort(array, moves, setSortedArray);
  }, 0);
}

export default animateBubbleSort;
