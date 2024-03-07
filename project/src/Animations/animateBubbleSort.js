function animateBubbleSort(array, moves, setSortedArray, setMove, setTimeoutId, arrayLength) {
  function calculateDelay(arrayLength) {
    const maxArrayLength = 50;
    const minArrayLength = 10;
    const maxDelay = 500;
    const minDelay = 0;

    if (arrayLength <= minArrayLength) {
      return maxDelay;
    } else if (arrayLength >= maxArrayLength) {
      return minDelay;
    } else {
      const slope = (minDelay - maxDelay) / (maxArrayLength - minArrayLength);
      return slope * (arrayLength - minArrayLength) + maxDelay;
    }
  }

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

  const delay = calculateDelay(arrayLength);
  const id = setTimeout(() => {
    animateBubbleSort(array, moves, setSortedArray, setMove, setTimeoutId, arrayLength);
  }, delay);
  setTimeoutId(id);
}

export default animateBubbleSort;
