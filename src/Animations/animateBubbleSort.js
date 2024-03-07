function animateBubbleSort(array, moves, setSortedArray, setBars) {
  if (!moves || moves.length === 0) {
    setBars();
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indicies;

  if (move.type === 'swap') {
    [array[i], array[j]] = [array[j], array[i]];
  }

  setBars(move);
  setSortedArray([...array]);

  setTimeout(() => {
    animateBubbleSort(array, moves, setSortedArray, setBars);
  }, 500);
}

export default animateBubbleSort;
