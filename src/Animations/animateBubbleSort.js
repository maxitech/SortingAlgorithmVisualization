function animateBubbleSort(array, moves, setSortedArray, setMove, setTimeoutId) {
  if (!moves || moves.length === 0) {
    setMove({});
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indicies;

  if (move.type === 'swap') {
    [array[i], array[j]] = [array[j], array[i]];
  }

  setMove(move);
  setSortedArray([...array]);

  const id = setTimeout(() => {
    animateBubbleSort(array, moves, setSortedArray, setMove, setTimeoutId);
  }, 50);
  setTimeoutId(id);
}

export default animateBubbleSort;
